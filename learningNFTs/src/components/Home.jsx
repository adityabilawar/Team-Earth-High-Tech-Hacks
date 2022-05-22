import LearningWalletBalance from './LearningWalletBalance';
import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import LearningNFTs from './artifacts/contracts/LearningNFT.sol/LearningNFTs.json';

const contractAddress = 'f54f090afa8ef07f076b1ab3824d874e';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, LearningNFT.abi, signer);


function Home() {

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
        <LearningWalletBalance />

        {Array(totalMinted + 1)
        .fill(0)
        .map((_, i) => (
            <div key={i}>
            <NFTImage tokenId={i} getCount={getCount} />
            </div>
        ))}
    </div>
  );
}

export default Home;