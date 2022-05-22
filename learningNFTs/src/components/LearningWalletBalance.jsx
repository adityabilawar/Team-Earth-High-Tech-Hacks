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
  
  export default LearningWalletBalance;