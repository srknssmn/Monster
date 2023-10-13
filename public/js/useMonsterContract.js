import { MONSTER_ADDRESS } from "/constants/address.js";
import { MONSTER_ABI } from "/constants/abi.js";
import {connectWalletfunc} from "/js/connectWallet.js";

document.querySelector("#kickMonster").addEventListener('click' , kickMonsterfunc)

async function kickMonsterfunc(event) {
    event.preventDefault()
    
    // get the wallet address from metamask
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length) {
        let walletAddress;
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner();
        const contract = await new ethers.Contract(MONSTER_ADDRESS, MONSTER_ABI, signer);
    
        const txn = await contract.kickMonster();
        await txn.wait();
        await console.log("success")

        const response = await fetch(`/wallet/connect?walletAddress=${walletAddress}`).then(response => {
            console.log(response)
            window.location.href = response.url;
            return window.location.href
        }).catch(function(err) {
            console.info("Error:" , err);
        });
    } else {
        connectWalletfunc();
    }

}