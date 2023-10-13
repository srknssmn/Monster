import { MONSTER_ADDRESS } from "/constants/address.js";
import { MONSTER_ABI } from "/constants/abi.js";
import {verifyNetwork} from "/js/verifyNetwork.js";

document.querySelector("#kickMonster").addEventListener('click' , kickMonsterfunc)

async function kickMonsterfunc(event) {
    event.preventDefault()

    if (!window.ethereum) {
        console.log("MetaMask not installed; using read-only defaults")
    }
    await verifyNetwork();
    
    // get the wallet address from metamask
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", [])
    const signer = await provider.getSigner();
    const contract = await new ethers.Contract(MONSTER_ADDRESS, MONSTER_ABI, signer);

    const txn = await contract.kickMonster();
    await txn.wait();
    await console.log("success")
}