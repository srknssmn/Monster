// import {recoverPersonalSignature} from '@metamask/eth-sig-util'
// import {bufferToHex} from 'ethereumjs-util';

// const walletNonce = async (req, res) => {
    
//     try {
//         const {walletAddress} = req.query;
//         const nonce = String(Math.floor(Math.random()*10000));
//         // save the nonce on the server
//         nonceList[walletAddress] = nonce;
//         res.send({nonce})
//     } catch (error) {
//         res.status(400).json({
//             status: 'fail',
//             error
//         })
//     }
// }

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

// export {
//     walletNonce,
//     walletVerify
// }