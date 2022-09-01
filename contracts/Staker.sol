// SPDX-License-Identifier: UNLICENSED

// Access modifiers cheatsheet:
//
// public   - all can access
// external - Cannot be accessed internally, only externally
// internal - only this contract and contracts deriving from it can access
// private  - can be accessed only from this contract

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//import "hardhat/console.sol";

/*
How to set timestamp in JS:
1. Create the date variable:
   const now = new Date();
2. Next, divide by 1000 and floor the UNIX timestamp:
   const timestamp = Math.floor(now.getTime() / 1000);
3. Profit
*/


contract Staker is Ownable, ReentrancyGuard {
    using SafeMath for uint256;

    uint public constant DAY   = 12;
    uint public constant MONTH = 2678400;
    uint public constant YEAR  = 32140800;

    struct Tier {
        uint chance;
        uint drop;
    }

    struct Tiers {
        Tier t1;
        Tier t2;
        Tier t3;
        Tier t4;
        Tier t5;
    }

    struct ERC20Stake {
        address project;
        uint256 amount;
        uint256 unlockTimestamp;
        uint256 timestamp;
    }

    struct ERC721Stake {
        address project;
        uint256 tokenId;
        bool isGenesis;
        uint256 unlockTimestamp;
        uint256 timestamp;
    }


    struct Project {
        string name;
        address addr;
        uint startTimestamp;
        uint stopTimestamp;
        uint256 supply;
    }

    // Projects
    Project[] private projects;

    Tiers private tiers;

    ERC20 private erc20Contract;
    ERC721 private erc721Contract;

    address private walletAddress;

    address[] private erc20Stakeholders;
    address[] private erc721Stakeholders;

    mapping(address => ERC20Stake[]) private erc20Stakes;
    mapping(address => ERC721Stake[]) private erc721Stakes;

    mapping(address => uint256) private stakePeriod;


    mapping(address => address) private latestProj;



    // Reward points
    mapping(address => uint256) points;

    // Events
    event ERC20Staked(address indexed sender, uint256 amount, uint256 period, uint256 points);
    event ERC721Staked(address indexed sender, uint256 tokenId, uint256 period, uint256 points);

    event ERC20Withdraw(address indexed sender);
    event ERC721Withdraw(address indexed sender);

    event Airdrop(address indexed sender, uint amount, uint random);

    event ProjectAdded(address indexed addr, string name, uint256 startTime, uint256 stopTime, uint supply);
    event ProjectDeleted(address indexed addr);

    modifier availAirdrop() {
        require (
            block.timestamp >= stakePeriod[msg.sender],
            "Airdrop not available"
        );
        _;
    }

    constructor(address _walletAddress, address _erc20Address, address _erc721Address, Tiers memory _tiers) {
        walletAddress = _walletAddress;
        
        erc20Contract = ERC20(_erc20Address);
        erc721Contract = ERC721(_erc721Address);

        tiers = _tiers;
    }

    // ------- UTILS -------
    function _isAddrInArray(address _address, address[] memory _arr) private pure returns(bool, uint256) {
        for (uint256 _s = 0; _s < _arr.length; _s += 1){
            if (_address == _arr[_s]) return (true, _s);
        }
        return (false, 0);
    }

    function _rmAddrFromArray(address _address, address[] memory _arr) private pure returns(address[] memory) {
        (bool exist, uint index) = _isAddrInArray(_address, _arr);
        if (exist) {
            _arr[index] = _arr[_arr.length - 1];
            delete _arr[_arr.length - 1];
        }
        return _arr;
    }
    ///

    function random(uint number) private view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % number;
    }

    function getTimestamp() public view onlyOwner returns(uint256) {
        return block.timestamp;
    }

    function addERC20Stakeholder(address _address) private {
        (bool _isStakeholder, ) = _isAddrInArray(_address, erc20Stakeholders);
        if(!_isStakeholder) erc20Stakeholders.push(_address);
    }

    function addERC721Stakeholder(address _address) private {
        (bool _isStakeholder, ) = _isAddrInArray(_address, erc721Stakeholders);
        if(!_isStakeholder) erc721Stakeholders.push(_address);
    }

    function removeERC20Stakeholder(address _address) private {
        erc20Stakeholders = _rmAddrFromArray(_address, erc20Stakeholders);
    }

    function removeERC721Stakeholder(address _address) private {
        erc721Stakeholders = _rmAddrFromArray(_address, erc721Stakeholders);
    }

    function getTotalERC20Stakes(address _staker) public view onlyOwner returns(uint256) {
        ERC20Stake[] memory _stakeArr = erc20Stakes[_staker];
        uint256 _total = 0;
        if (_stakeArr.length > 0) {
            for (uint256 _i = 0; _i < _stakeArr.length; _i += 1) {
                _total = _total + _stakeArr[_i].amount;
            }
        }
        return _total;
    }

    function getPoints(address _addr) external view onlyOwner returns(uint) {
        return points[_addr];
    }


    // Projects

    function _isProjectExist(address _addr) private view returns(bool, uint) {
        bool _exist = false;
        uint _index = 0;
        for (uint256 _i = 0; _i < projects.length; _i += 1) {
            if (projects[_i].addr == _addr) {
                _exist = true;
                _index = _i;
                break;
            }    
        }
        return (_exist, _index);
    }

    function addProject(string memory _name, address _addr, uint256 _startTimestamp, uint256 _stopTimestamp, uint _supply) public onlyOwner {
        (bool _exist,) = _isProjectExist(_addr);
        if (!_exist) {
            projects.push(Project(_name, _addr, _startTimestamp, _stopTimestamp, _supply));
            emit ProjectAdded(_addr, _name, _startTimestamp, _stopTimestamp, _supply);
        }
    }
    
    function removeProject(address _addr) public onlyOwner {
        (bool _exist, uint _index) = _isProjectExist(_addr);
        if (_exist) {
            projects[_index] = projects[projects.length - 1];
            delete projects[projects.length - 1];
        }
    }


    function getProject(address _addr) private view returns(Project memory) {
        (bool _exist, ) = _isProjectExist(_addr);
        if (_exist) {
            for (uint _i = 0; _i < projects.length; _i++) {
                if (projects[_i].addr == _addr) {
                    return projects[_i];
                }
            }
        }
    }


    function checkProject(address _project) public view {
        (bool _exist, ) = _isProjectExist(_project);
        
        require(_exist, "Project not exist!");
        Project memory proj = getProject(_project);

        require (
            proj.startTimestamp <= block.timestamp &&
            proj.stopTimestamp >= block.timestamp,
            "Project is closed!"
        );
    }

    function stakeERC20(address _project, uint256 _stake, uint256 _period) external nonReentrant {
        checkProject(_project);

        latestProj[msg.sender] = _project;

        erc20Contract.transferFrom(msg.sender, address(this), _stake);
        addERC20Stakeholder(msg.sender);
        
        ERC20Stake[] storage stakeArr = erc20Stakes[msg.sender];
        stakeArr.push(ERC20Stake(_project, _stake, block.timestamp + (DAY * 14), block.timestamp));
        erc20Stakes[msg.sender] = stakeArr;

        uint _d = 0;
        if (stakePeriod[msg.sender] > 0) {
            _d = stakePeriod[msg.sender];
        }

        points[msg.sender] = points[msg.sender] + (_stake / 50) + _period;
        stakePeriod[msg.sender] = block.timestamp + (_period * MONTH);
        emit ERC20Staked(msg.sender, _stake, _period, points[msg.sender]);
    }

    

    function stakeERC721(address _project, uint _tokenId, uint256 _period) external nonReentrant {
        checkProject(_project);

        latestProj[msg.sender] = _project;

        erc721Contract.transferFrom(msg.sender, address(this), _tokenId);
        addERC721Stakeholder(msg.sender);

        ERC721Stake[] storage stakeArr = erc721Stakes[msg.sender];
        stakeArr.push(ERC721Stake(_project, _tokenId, false, block.timestamp + (DAY * 14), block.timestamp));
        erc721Stakes[msg.sender] = stakeArr;

        points[msg.sender] = points[msg.sender] + 1 + _period;
        stakePeriod[msg.sender] = block.timestamp + (_period * MONTH);
        emit ERC721Staked(msg.sender, _tokenId, _period, points[msg.sender]);
    }

    function airdrop() public availAirdrop{
        uint _rand = random(100);
        uint _points = points[msg.sender];
        uint _drop = 0;

        if (_points == 1) {
            // T5
            if (_rand <= tiers.t5.chance) {
                _drop = tiers.t5.drop;
            }
        } else if (_points > 1 && _points <= 5)  {
            // T4
            if (_rand <= tiers.t4.chance) {
                _drop = tiers.t4.drop;
            }
        } else if (_points > 5 && _points <= 10) {
            // T3
            if (_rand <= tiers.t3.chance) {
                _drop = tiers.t3.drop;
            }
        } else if (_points > 10 && _points <= 15) {
            // T2
            if (_rand <= tiers.t2.chance) {
                _drop = tiers.t2.drop;
            }  
        } else if (_points > 20) {
            // T1
            if (_rand <= tiers.t1.chance) {
                _drop = tiers.t1.drop;
            }
        }

        emit Airdrop(msg.sender, _drop, _rand);

        Project memory _proj = getProject(latestProj[msg.sender]);
        if (_drop > 0 && _drop <= _proj.supply) {
            ERC20(_proj.addr).approve(msg.sender, _drop);
            ERC20(_proj.addr).transferFrom(walletAddress, msg.sender, _drop);
        }
    }

    function withdrawERC20() external nonReentrant {
        ERC20Stake[] memory stakeArr = erc20Stakes[msg.sender];
        uint _tr = 0;
        if (stakeArr.length > 0) {
            uint256 _amount = 0;
            for (uint256 _i = 0; _i < stakeArr.length; _i += 1) {
                if (stakeArr[_i].unlockTimestamp <= block.timestamp) {
                    _amount = _amount + stakeArr[_i].amount;
                    _tr++;
                }
            }

            erc20Contract.approve(msg.sender, _amount);
            erc20Contract.transferFrom(address(this), msg.sender, _amount);
        }

        if (_tr == stakeArr.length) {
            delete erc20Stakes[msg.sender];
            removeERC20Stakeholder(msg.sender);
            emit ERC20Withdraw(msg.sender);
        }
    }

    function withdrawERC721() external nonReentrant {
        ERC721Stake[] memory stakeArr = erc721Stakes[msg.sender];
        uint _tr = 0;
        if (stakeArr.length > 0) {
            for (uint256 _i = 0; _i < stakeArr.length; _i += 1) {
                if (stakeArr[_i].unlockTimestamp <= block.timestamp) {
                    erc721Contract.transferFrom(address(this), msg.sender, stakeArr[_i].tokenId);
                    _tr++;
                }
            }
        }

        if (_tr == stakeArr.length) {
            delete erc721Stakes[msg.sender];
            removeERC721Stakeholder(msg.sender);
            emit ERC721Withdraw(msg.sender);
        }
    }
}