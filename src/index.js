const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
// import express from 'express';
// import { engine } from 'express-handlebars';
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine(
    {extname: '.hbs'}
));
app.set('view engine', 'hbs');
//set path folder
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req,res) => {
    res.render('home');
})

app.get('/news', (req,res) => {
    res.render('news');
})

app.listen(port, () => console.log(`Example app listening at ${port}`))