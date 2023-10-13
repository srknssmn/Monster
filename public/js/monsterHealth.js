import { MONSTER_ADDRESS } from "/constants/address.js";
import { MONSTER_ABI } from "/constants/abi.js";

let monsterHealthID = document.querySelector('#monsterHealthID')
let monsterHealthP = document.querySelector('#monsterHealthP')

export const monsterHealth = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MONSTER_ADDRESS, MONSTER_ABI, signer);
    
    const totalHealth = await contract.MonsterHealth();
    const totalLockedAmount = await ethers.utils.formatEther(totalHealth)
    let totalLockedAmount1 = await totalLockedAmount * 1000000000000000;
    let totalLockedAmount2 = await totalLockedAmount1 * 1000;
    let totalLockedAmount3 = await Math.round(totalLockedAmount2)
    monsterHealthID.innerHTML = await totalLockedAmount3
    let amount = await (100000 - totalLockedAmount3) / 100000 * 100
    monsterHealthP.style.width = `${amount}%`;
};