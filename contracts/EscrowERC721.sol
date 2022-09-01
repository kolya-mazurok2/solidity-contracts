// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EscrowERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    IERC721 internal token;

    struct ERC721Item {
        address sender;
        address receiver;
        uint256 itemId;
    }

    mapping(uint256 => ERC721Item) public items;

    constructor(IERC721 _token) {
        token = _token;
    }

    function deposit(address _receiver, uint256 _itemId)
        external
        returns (uint256)
    {
        require(msg.sender == token.ownerOf(_itemId), "Not an owner");

        uint256 id = _tokenIds.current();
        token.transferFrom(msg.sender, address(this), _itemId);
        items[id] = ERC721Item({
            sender: msg.sender,
            receiver: _receiver,
            itemId: _itemId
        });

        _tokenIds.increment();

        return id;
    }

    function withdraw(uint256 _id) public {
        address receiver = items[_id].receiver;
        uint256 itemId = items[_id].itemId;
        delete (items[_id]);
        token.transferFrom(address(this), receiver, itemId);
    }

    function rollback(uint256 transactionId) public {
        address sender = items[transactionId].sender;
        uint256 itemId = items[transactionId].itemId;

        require(sender == msg.sender, "Not a sender");

        delete (items[itemId]);
        token.transferFrom(address(this), sender, itemId);
    }
}
