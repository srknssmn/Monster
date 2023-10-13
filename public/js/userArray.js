import { MONSTER_ADDRESS } from "/constants/address.js";
import { MONSTER_ABI } from "/constants/abi.js";

let userList = document.querySelector('#userList')
let kickersList = document.querySelector('#kickersList')

kickersList.addEventListener('click' , userArray)

async function userArray() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MONSTER_ADDRESS, MONSTER_ABI, signer);
    
    const userArray = await contract.showKickersArray();
    kickersList.hidden = true

    for (let i = 0 ; i < userArray.length ; i++ ) {
        const listItem = document.createElement("li");
        const div =  document.createElement("div");
        div.classList.add("d-flex" , "flex-row")
        listItem.appendChild(div);
        const kicker = document.createElement("p");
        const space = document.createElement("p");
        const kickerCount = document.createElement("p");
        div.appendChild(kicker);
        div.appendChild(space);
        div.appendChild(kickerCount);
        kicker.innerHTML = userArray[i].kicker
        space.innerHTML = "&nbsp = &nbsp"
        kickerCount.innerHTML = userArray[i].kickNumber
        userList.appendChild(listItem);
    }
};