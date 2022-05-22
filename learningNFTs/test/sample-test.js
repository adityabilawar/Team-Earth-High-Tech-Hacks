const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LearningNFT", function (){
    it("Should be able to mint if needed and give the NFT to the other user", async function() {
        const LearnNFT = await ethers.getContractFactory("LearnNFTs");
        const learnnfts = await LearnNFT.deploy();
        await learnnfts.deployed();

        const recipient = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
        const metadataURI = 'cid/test.png';

        let balance = await learnnfts.balanceOf(recipient);
        expect(balance).to.equal(0);

        const thelatestMintedToken = await learnnfts.payToMint(recipient, metadatraURI, { value: ethers.utils.parseEther('0.069')});
    });
});


describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
