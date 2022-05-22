// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
//OpenZepplin(to make an ethereum contract in ERC721)
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LearningNFTs is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(string => uint8) existingURIs;

    constructor() ERC721("LearningNFTs", "LFT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function count() public view returns(uint256){
        return _tokenIdCounter.current();
    }

    function payToHaveNFTMinted(address recipient, string memory metadataURI) public payable returns(uint256){
         require(existingURIs[metadataURI] != 1, 'this NFT has already been minted! Please be careful next time!');
         require (msg.value >= 0.05 ether, 'You have to pay a higher price!!!!!! heheheHa');

         uint ItemIDLearningNFT = _tokenIdCounter.current();
         _tokenIdCounter.increment();
         existingURIs[metadataURI] = 1;

         _mint(recipient, ItemIDLearningNFT);
        _setTokenURI(ItemIDLearningNFT, metadataURI);

        return ItemIDLearningNFT;
    }
    function whetherNFTIsHasOwner(string memory uri) public view returns (bool){
        return existingURIs[uri] == 1;

    }

     
}