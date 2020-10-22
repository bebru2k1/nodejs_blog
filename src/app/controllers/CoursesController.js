const Course = require('../models/Course');
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const { mutipleMongooseToObject } = require('../../until/mongoose');
const { mongooseToObject } = require('../../until/mongoose');


class CoursesController {
    
    show(req, res,next) {
        console.log(req.params.slug)
        Course.findOne({ slug : req.params.slug})
        .then(course => {
            res.render('courses/show', {course : mongooseToObject(course)})
        })
        .catch(next);
    };
    
    create(req, res,next) {
        res.render('courses/create');

        // const schema = new Schema();
        // // Equivalent to `schema.statics.findByName = function(name) {}`;
        // schema.static('findByName', function(name) {
        // return this.find({ name: name });
        // });

        // const Drink = mongoose.model('Drink', schema);
        // await Drink.findByName('LaCroix');
    };
    store(req, res,next) {
        let formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        
        const courses = new Course(req.body);
        courses.save()
        .then(() => {
            res.redirect('home')
        })
        .catch(next)
    };

}

module.exports = new CoursesController();
