const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
// import express from 'express';
// import { engine } from 'express-handlebars';
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
//set path folder
app.set('views', path.join(__dirname, 'resources','views'));

//Routes init
route(app);

// app.get('/', (req,res) => {
//     res.render('home');
// })

// app.get('/news', (req,res) => {
//     res.render('news');
// })

// app.get('/search', (req,res) => {
//     res.render('search');
// })

// app.post('/search', (req,res) => {
//     console.log(req.body);
//     res.send('');
// })

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
