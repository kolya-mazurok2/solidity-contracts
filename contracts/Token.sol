// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint256 public testValue;
    event TestEvent(uint256 amount);

    constructor(uint256 _initialSupply) ERC20("Game", "$GAME") {
        _mint(msg.sender, _initialSupply);
    }

    function helloWorld(uint256 value) public returns (uint256) {
        // Keep error messages as short as you can to save transaction cost
        require(value < 100, "V1");
        testValue = value;
        emit TestEvent(value);
        return value;
    }
}
