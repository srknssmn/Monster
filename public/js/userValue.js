import { MONSTER_ADDRESS } from "/constants/address.js";
import { MONSTER_ABI } from "/constants/abi.js";

let userCount = document.querySelector('#userCount')

export const userValue = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MONSTER_ADDRESS, MONSTER_ABI, signer);
    
    const userValue = await contract.playerKick(signer.getAddress());
    const userValueAmount = await ethers.utils.formatEther(userValue)
    let userValueAmount1 = await userValueAmount * 1000000000000000;
    let userValueAmount2 = await userValueAmount1 * 1000;
    let userValueAmount3 = await Math.round(userValueAmount2)
    console.log(userValueAmount3)
    userCount.innerHTML = await userValueAmount3;
};