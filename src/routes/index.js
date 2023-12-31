const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {

    app.use('/courses', courseRouter);
    // app.get('/news', (req,res) => {
    //     res.render('news');
    // })
    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    // app.get('/', (req,res) => {
    //     res.render('home');
    // })
    app.use('/', siteRouter);

    // app.get('/search', (req,res) => {
    //     res.render('search');
    // })

    // app.post('/search', (req,res) => {
    //     console.log(req.body);
    //     res.send('');
    // })
}

module.exports = route;
