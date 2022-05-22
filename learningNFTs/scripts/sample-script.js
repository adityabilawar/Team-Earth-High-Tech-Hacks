
const hre = require("hardhat");

async function main() {
   //await hre.run('compile');

  // We get the contract to deploy
  const LearningNFTs = await hre.ethers.getContractFactory("LearningNFTs");
  const learnnfts = await LearningNFTs.deploy();

  await learnnfts.deployed();

  console.log("LearningNFTs deployed to:", learnnfts.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
