import { MONSTER_ADDRESS } from "/constants/address.js";
import { MONSTER_ABI } from "/constants/abi.js";

let monsterFirstHealth = document.querySelector('#monsterFirstHealth')
let monsterFirstHealthV = document.querySelector('#monsterFirstHealthV')

export const monsterFirstHealthFunc = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MONSTER_ADDRESS, MONSTER_ABI, signer);
    
    const totalHealth = await contract.monsterFirstHealth();
    const totalLockedAmount = await ethers.utils.formatEther(totalHealth)
    let totalLockedAmount1 = await totalLockedAmount * 1000000000000000;
    let totalLockedAmount2 = await totalLockedAmount1 * 1000;
    let totalLockedAmount3 = await Math.round(totalLockedAmount2)
    monsterFirstHealth.innerHTML = await totalLockedAmount3
    monsterFirstHealthV.value = await totalLockedAmount3 
};