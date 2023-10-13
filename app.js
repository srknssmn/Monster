import express from "express";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'))
app.use(express.json());

import pageRoute from './routes/pageRoute.js';
import walletRoute from './routes/walletRoute.js';

app.use('/', pageRoute);
app.use('/wallet', walletRoute);

const port = process.env.PORT

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});