const Course = require('./models/Course')

class SiteController {
    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    //[GET] /
    async index(req, res) {
        try {
            const data = await Course.find({});
            res.json(data);
        } catch (error) {
            res.status(400).json({error: err});
        }
        // Course.find({})
        // res.render('home');
    }
}

module.exports = new SiteController();
