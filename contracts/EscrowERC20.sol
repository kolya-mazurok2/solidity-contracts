// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EscrowERC20 {
    using Counters for Counters.Counter;
    Counters.Counter private _transactionCounter;

    address internal owner;
    mapping(bytes32 => address) public allowedTokens;
    mapping(address => mapping(bytes32 => uint256)) public balances;
    mapping(uint256 => Transcation) private transactions;

    struct Transcation {
        address sender;
        address receiver;
        bytes32 symbol;
        uint256 amount;
    }

    constructor() {
        owner = msg.sender;
    }

    function allowToken(bytes32 _symbol, address _tokenAddress) external {
        require(msg.sender == owner, "Only for an owner");

        allowedTokens[_symbol] = _tokenAddress;
    }

    function deposit(
        uint256 _amount,
        bytes32 _symbol,
        address _receiver
    ) external returns (uint256) {
        balances[_receiver][_symbol] += _amount;
        ERC20(allowedTokens[_symbol]).transferFrom(
            msg.sender,
            address(this),
            _amount
        );
        uint256 transactionId = _transactionCounter.current();
        transactions[transactionId] = Transcation({
            sender: msg.sender,
            receiver: _receiver,
            symbol: _symbol,
            amount: _amount
        });

        _transactionCounter.increment();

        return transactionId;
    }

    function withdraw(uint256 _amount, bytes32 _symbol) external {
        require(balances[msg.sender][_symbol] >= _amount, "Insufficent funds");

        balances[msg.sender][_symbol] -= _amount;
        ERC20(allowedTokens[_symbol]).transfer(msg.sender, _amount);
    }

    function rollback(uint256 transactionId) public {
        address receiver = transactions[transactionId].receiver;
        uint256 transactionAmount = transactions[transactionId].amount;
        bytes32 symbol = transactions[transactionId].symbol;

        require(
            transactions[transactionId].sender == msg.sender,
            "Not a sender"
        );
        require(
            balances[receiver][symbol] >= transactionAmount,
            "Insufficient funds"
        );

        balances[receiver][symbol] -= transactionAmount;
        ERC20(allowedTokens[symbol]).transfer(msg.sender, transactionAmount);
    }
}
