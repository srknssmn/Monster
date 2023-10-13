import express from 'express';
const router = express.Router();

import * as walletController from '../controllers/walletController.js';

router.route('/connect').get(walletController.walletConnect);

export default router;