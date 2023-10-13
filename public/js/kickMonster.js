import {useMonsterContract} from "/js/useMonsterContract.js";
const monsterContract = useMonsterContract();

import {verifyNetwork} from "/js/verifyNetwork.js";

document.querySelector("#kickMonster").addEventListener('click' , kickMonsterfunc)

async function kickMonsterfunc(event) {
    event.preventDefault()

    // await verifyNetwork();

    const txn = await monsterContract.kickMonster();
    await txn.wait();
    await console.log("success")
}