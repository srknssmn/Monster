import { MONSTER_ADDRESS } from "/constants/address.js";
import { MONSTER_ABI } from "/constants/abi.js";

let userList = document.querySelector('#userList')
let kickersList = document.querySelector('#kickersList')
let userListSect = document.querySelector('#userListSect')

kickersList.addEventListener('click' , userArray)

async function userArray() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MONSTER_ADDRESS, MONSTER_ABI, signer);
    
    const userArray = await contract.showKickersArray();
    kickersList.hidden = true
    userListSect.hidden = false

    let newUserArray = await [...userArray]
    let sortedUserArray = await newUserArray.sort((a, b) => ethers.utils.formatEther(b.kickNumber) - ethers.utils.formatEther(a.kickNumber));

    for (let i = 0 ; i < sortedUserArray.length ; i++ ) {
        if (i < 10) {
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
            let first = sortedUserArray[i].kicker.slice(0, 5)
            let last = sortedUserArray[i].kicker.slice(-5)
            kicker.innerHTML = first + "..." + last
            space.innerHTML = "&nbsp = &nbsp"
            kickerCount.innerHTML = sortedUserArray[i].kickNumber
            userList.appendChild(listItem);
        }
    }
};