import express from "express";
import dotenv from 'dotenv';
import session from 'express-session';

const app = express();
dotenv.config();

// Template Engine
app.set('view engine', 'ejs');

//Global Variable
global.walletIN = null

// Middlewares
app.use(express.static('public'))
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))
app.use('*', (req,res, next) => {
  walletIN = req.session.walletID;
  next();
})

import pageRoute from './routes/pageRoute.js';
import walletRoute from './routes/walletRoute.js';

app.use('/', pageRoute);
app.use('/wallet', walletRoute);

const port = process.env.PORT

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});