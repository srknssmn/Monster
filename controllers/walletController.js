// import {recoverPersonalSignature} from '@metamask/eth-sig-util'
// import {bufferToHex} from 'ethereumjs-util';

const walletConnect = async (req, res) => {
    
    try {
        const {walletAddress} = req.query;
        req.session.walletID = await walletAddress
        res.redirect('/')
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}

// const walletVerify = async (req, res) => {
    
//     const { walletAddress, signedNonce } = req.query;
//     const nonce = nonceList[walletAddress];
    
//     try {

//         const hexNonce = bufferToHex(Buffer.from(nonce, "utf8"));
//         const retrievedAddress = recoverPersonalSignature({
//             data: hexNonce,
//             signature: signedNonce,
//         });

//     } catch (error) {
//         console.log(error)
//         res.status(400).json(error)
//     }
// }

export {
    walletConnect
}