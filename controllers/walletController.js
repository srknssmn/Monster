const walletConnect = async (req, res) => {
    
    try {
        const {walletAddress} = req.query;
        res.redirect('/')
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}

export {
    walletConnect
}