//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

contract BasicToken {
    mapping(address => uint256) public balances;

    constructor(uint _initSupply) {
        balances[msg.sender] = _initSupply;
    }

    function transfer(address _receiver, uint256 _amount) public returns (bool success) {
        require(balances[msg.sender] >= _amount);
        require(balances[_receiver] + _amount >= balances[_receiver]);

        balances[msg.sender] -= _amount;
        balances[_receiver] += _amount;

        return true;
    }
}