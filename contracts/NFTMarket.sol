// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

struct Product {
    uint256 price;
    address seller;
}

contract NFTMarket is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    using SafeMath for uint;

    Counters.Counter private _tokenIds;
    mapping(uint256 => Product) private _products;

    event Created(uint256 _id, address _to, string _tokenUri);
    event Purchased(uint256 _id, address buyer, address seller);
    event OnSale(uint256 _id, uint256 _to, address seller);
    event SaleCanceled(uint256 _id, address seller);

    modifier validPrice(uint256 _price) {
        require(_price > 0, "Insufficient price");
        _;
    }

    constructor() ERC721("Product", "PRD") {}

    function create(string calldata _tokenUri) public {
        uint256 id = _tokenIds.current();
        _safeMint(msg.sender, id);
        _setTokenURI(id, _tokenUri);
        _tokenIds.increment();

        emit Created(id, msg.sender, _tokenUri);
    }

    function forSale(uint256 _id, uint256 _price) public validPrice(_price) {
        approve(address(this), _id);
        transferFrom(msg.sender, address(this), _id);
        _products[_id] = Product(_price, msg.sender);

        emit OnSale(_id, _price, msg.sender);
    }

    function purchase(uint256 _id) public payable {
        Product memory product = _products[_id];
        require(product.price > 0, "Not for sale");
        require(msg.value == product.price, "Incorrect price");
        ERC721(address(this)).transferFrom(address(this), msg.sender, _id);
        removeProduct(_id);
        uint256 sellerReward = product.price.div(10).mul(9);
        payable(product.seller).transfer(sellerReward);

        emit Purchased(_id, msg.sender, product.seller);
    }

    function cancelSale(uint256 _id) public {
        Product memory product = _products[_id];
        require(product.price > 0, "Not for sale");
        require(product.seller == msg.sender, "Not an owner");
        ERC721(address(this)).transferFrom(address(this), msg.sender, _id);
        removeProduct(_id);

        emit SaleCanceled(_id, msg.sender);
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "Zero balance");
        payable(owner()).transfer(balance);
    }

    function removeProduct(uint256 _id) private {
        delete _products[_id];
    }
}
