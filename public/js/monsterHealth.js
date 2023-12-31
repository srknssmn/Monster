import { MONSTER_ADDRESS } from "/constants/address.js";
import { MONSTER_ABI } from "/constants/abi.js";

let monsterHealthID = document.querySelector('#monsterHealthID')
let monsterHealthP = document.querySelector('#monsterHealthP')
let monsterFirstHealthV = document.querySelector('#monsterFirstHealthV')

export const monsterHealth = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MONSTER_ADDRESS, MONSTER_ABI, signer);
    
    const totalHealth = await contract.monsterHealth();
    const totalLockedAmount = await ethers.utils.formatEther(totalHealth)
    let totalLockedAmount1 = await totalLockedAmount * 1000000000000000;
    let totalLockedAmount2 = await totalLockedAmount1 * 1000;
    let totalLockedAmount3 = await Math.round(totalLockedAmount2)
    monsterHealthID.innerHTML = await totalLockedAmount3
    let monsterFirstHealthValue = await monsterFirstHealthV.value
    let amount = await ((monsterFirstHealthValue - totalLockedAmount3) * 100 / monsterFirstHealthValue)
    monsterHealthP.style.width = `${amount}%`;
    console.log(monsterFirstHealthValue)
    console.log(totalLockedAmount3)
    console.log(amount)
};