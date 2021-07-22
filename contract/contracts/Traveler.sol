// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Traveler is ERC721, ERC721Enumerable, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // Where funds should be sent to
    address payable public fundsTo;

    // Maximum supply of the NFT
    uint256 public maxSupply;

    // Maximum mints per transaction
    uint256 public maxPerTx;

    // Is sale on?
    bool public sale;

    // Sale price
    uint256 public pricePer;

    constructor(address payable fundsTo_, uint256 maxSupply_, uint256 maxPerTx_, uint256 pricePer_) ERC721("Traveler", "TRAVEL") {
        fundsTo = fundsTo_;
        maxSupply = maxSupply_;
        maxPerTx = maxPerTx_;
        sale = false;
        pricePer = pricePer_;
    }

    function updateFundsTo(address payable newFundsTo) public onlyOwner {
        fundsTo = newFundsTo;
    }

    function enableSale() public onlyOwner {
        sale = true;
    }

    function safeMint(address to, uint256 quantity) payable public {
        // Sale must be enabled
        require(sale, "Sale disabled");
        // Cannot mint 0
        require(quantity != 0, "Requested quantity cannot be zero");
        // Cannot mint more than maximum
        require(quantity <= maxPerTx, "Requested quantity more than maximum");
        // Transaction must have at least quantity * price (any more is considered a tip)
        require(quantity * pricePer <= msg.value, "Not enough ether sent");
        // Mint operation cannot lead to more than max supply
        require(super.totalSupply() + quantity <= maxSupply, "Total supply will exceed limit");

        // Already checked that there is enough ether
        fundsTo.transfer(msg.value);

        for (uint256 i = 0; i < quantity; i++) {
            _safeMint(to, _tokenIdCounter.current());
            _tokenIdCounter.increment();
        }
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://REPLACE_ME";
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
