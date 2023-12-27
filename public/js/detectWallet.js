window.onload = (event) => {
    isConnected();
};

import {monsterHealth} from "/js/monsterHealth.js";
import {monsterFirstHealthFunc} from "/js/monsterFirstHealth.js";
import {userValue} from "/js/userValue.js";
import {userPowerFunc} from "/js/userPower.js";

let progressBAR = document.querySelector('#progressBAR')
let connectWalletButton = document.querySelector('#connectWallet')
let kickMonsterButton = document.querySelector('#kickMonster')
let monsterHealthSec = document.querySelector('#monsterHealthSec')
let userInfo = document.querySelector('#userInfo')
let userWallet = document.querySelector('#userWallet')
let kickersList = document.querySelector('#kickersList')

async function isConnected() {
    const accounts = await ethereum.request({method: 'eth_accounts'});       
    if (accounts.length) {
        console.log(`You're connected to: ${accounts[0]}`);
        connectWalletButton.hidden = true
        kickMonsterButton.hidden = false
        await monsterFirstHealthFunc();
        await monsterHealth();
        await userValue();
        await userPowerFunc();
        progressBAR.hidden = false
        monsterHealthSec.hidden = false
        userInfo.hidden = false
        kickersList.hidden = false
        userWallet.innerHTML = accounts[0];
    } else {
        console.log("Metamask is not connected");
        kickMonsterButton.hidden = true
        connectWalletButton.hidden = false
        monsterHealthSec.hidden = true
        userInfo.hidden = true
        kickersList.hidden = true
        progressBAR.hidden = true
    }
}