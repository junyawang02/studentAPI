'use strict';

var mongoose = require('mongoose'),
    enrollment = mongoose.model('Enrollment');

exports.list_all_enrollments = (req, res) => {
    enrollment.find({}, (err, enrollment) => {
        if (err)
            res.send(err);
        res.json(enrollment);
    });
};

exports.create_a_enrollment = (req, res) => {
    var new_enrollment = new enrollment(req.body);
    new_enrollment.save((err, enrollment) => {
        if (err)
            res.send(err);
        res.json(enrollment);
    });
};

exports.read_a_enrollment = (req, res) => {
    enrollment.findById(req.params.enrollmentId, (err, enrollment) => {
        if (err)
            res.send(err);
        res.json(enrollment);
    });
};

exports.update_a_enrollment = (req, res) => {
    enrollment.findOneAndUpdate({ _id: req.params.enrollmentId }, req.body, { new: true }, (err, enrollment) => {
        if (err)
            res.send(err);
        res.json(enrollment);
    });
};

exports.delete_a_enrollment = (req, res) => {
    enrollment.remove({
        _id: req.params.enrollmentId
    }, (err, enrollment) => {
        if (err)
            res.send(err);
        res.json({ message: 'Enrollment sucessfully deleted' });
    });
};