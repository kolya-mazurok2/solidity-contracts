// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Escrow {
    mapping (address => uint) public balances;

    event Withdraw(address receiver, uint amount);

    receive() external payable {
        balances[msg.sender] += msg.value;
    }

    fallback() external payable {
        deposit(payable(msg.sender));
    }

    function deposit(address payable _receiver) public payable {
        require(msg.value <= 100e18, "You can not send more than 100 ethers");
        balances[_receiver] += msg.value;
    }

    function withdraw() external payable {
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
        emit Withdraw(msg.sender, amount);
    }

    function getBalanceByAddr(address _addr) public view returns(uint _amount) {
      return balances[_addr];
    }
}