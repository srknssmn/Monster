import {verifyNetwork} from "/js/verifyNetwork.js";
document.querySelector("#connectWallet").addEventListener('click' , connectWalletfunc)

async function connectWalletfunc() {

    if (!window.ethereum) {
        console.log("MetaMask not installed; using read-only defaults")
        window.alert("Install Metamask")
        if(confirm("Metamask Download")) document.location = 'https://metamask.io/download/';
    }
    await verifyNetwork();
    
    let walletAddress;
    // get the wallet address from metamask
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []).then((accounts) => {
        walletAddress = accounts[0];
    })
    const signer = await provider.getSigner();
    await location.reload();
}

export {
    connectWalletfunc
}