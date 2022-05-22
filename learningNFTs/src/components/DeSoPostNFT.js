import Deso from 'deso-protocol';

const login   = window.open('https://identity.deso.org/log-in');
const signUp  = window.open('https://identity.deso.org/sign-up');
const logout  = window.open('https://identity.deso.org/logout?publicKey=BC123...');
const approve = window.open('https://identity.deso.org/approve?tx=0abf35a...');

// Can be added to any path for testnet deso and bitcoin addresses
const testnet = window.open('https://identity.deso.org/log-in?testnet=true');



const deso = new Deso();
const request = {
  "UpdaterPublicKeyBase58Check": null,
  "NFTPostHashHex": "be84338d248394f9ef194c01054039a51667420a7fb91fb838c2445f786432b6",
  "NumCopies": 1,
  "NFTRoyaltyToCreatorBasisPoints": 100,
  "NFTRoyaltyToCoinBasisPoints": 100,
  "HasUnlockable": false,
  "IsForSale": false,
  "MinFeeRateNanosPerKB": 1000
};
 const response = await deso.nft.createNft(request); 



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


import { useState } from 'react';
import { ethers } from 'ethers';

function LearningWalletBalance() {

    const [balance, setBalance] = useState();
    
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const Learnerprovider = new ethers.providers.Web3Provider(window.ethereum);
        const Studentsbalance = await Learnerprovider.getBalance(account);
        setBalance(ethers.utils.formatEther(Studentsbalance));
    };
  
    return (
     <div className="card">
        <div>
             <h5>Your Balance: {Studentsbalance}</h5>
             <button onClick={() => getBalance()}>Show My Balance</button>
        </div>
     </div>
    );
  };
  
 
