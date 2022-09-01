// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EscrowERC20 {
    address owner;
    mapping(bytes32 => address) public allowedTokens;
    mapping(address => mapping (bytes32 => uint256)) public balances;

    constructor() {
        owner = msg.sender;
    }

    function allowToken(bytes32 _symbol, address _tokenAddress) external {
        require(msg.sender == owner, "Only for an owner");

        allowedTokens[_symbol] = _tokenAddress;
    }


    function deposit(uint256 _amount, bytes32 _symbol, address _receiver) external  {
        balances[_receiver][_symbol] += _amount;
        ERC20(allowedTokens[_symbol]).transferFrom(msg.sender, address(this), _amount);
    }

    function withdraw(uint256 _amount, bytes32 _symbol) external {
        require(balances[msg.sender][_symbol] >= _amount, "Insufficent funds");

        balances[msg.sender][_symbol] -= _amount;
        ERC20(allowedTokens[_symbol]).transfer(msg.sender, _amount);
    }
}