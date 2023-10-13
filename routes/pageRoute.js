import express from 'express';
const router = express.Router();

import * as pageController from '../controllers/pageController.js';

// Page Routes
router.route('/').get(pageController.getIndexPage);

export default router;