// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Escrow {
    using Counters for Counters.Counter;
    Counters.Counter private _transactionCounter;

    mapping (address => uint256) public balances;
    mapping (uint256 => Transcation) private transactions;

    struct Transcation {
        address sender;
        address receiver;
        uint256 amount;
    }

    event Withdrawal(address receiver, uint256 amount);

    receive() external payable {
        balances[msg.sender] += msg.value;
    }

    fallback() external payable {
        deposit(payable(msg.sender));
    }

    function deposit(address payable _receiver) public payable returns (uint256) {
        require(msg.value <= 100e18, "100 ethers limit");
        balances[_receiver] += msg.value;
        uint256 transactionId = _transactionCounter.current();
        transactions[transactionId] = Transcation({
            sender: msg.sender,
            receiver: _receiver,
            amount: msg.value
        });

        _transactionCounter.increment();

        return transactionId;
    }

    function withdraw() external payable {
        uint256 amount = balances[msg.sender];
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }

    function rollback(uint256 transactionId) public {
        address receiver = transactions[transactionId].receiver;
        uint256 transactionAmount = transactions[transactionId].amount;
        require(transactions[transactionId].sender == msg.sender, "Not a sender");
        require(balances[receiver] >= transactionAmount, "Insufficient funds");
        balances[receiver] -= transactionAmount;
        payable(msg.sender).transfer(transactionAmount);
    }

    function getBalanceByAddr(address _addr) public view returns(uint256 _amount) {
      return balances[_addr];
    }
}