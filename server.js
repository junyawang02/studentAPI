var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Student = require('./api/models/studentModel'),
    Class = require('./api/models/classModel'),
    Enrollment = require('./api/models/enrollmentModel')
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/studentdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/studentRoutes');
var routes1 = require('./api/routes/classRoutes');
var routes2 = require('./api/routes/enrollmentRoutes');
routes(app);
routes1(app);
routes2(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('student RESTful API server started on: ' + port);