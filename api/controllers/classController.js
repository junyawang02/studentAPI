'use strict';

var mongoose = require('mongoose'),
    Class = mongoose.model('Classes');

exports.list_all_classes = (req, res) => {
    Class.find({}, (err, my_class) => {
        if (err)
            res.send(err);
        res.json(my_class);
    });
};

exports.create_a_class = (req, res) => {
    var new_class = new Class(req.body);
    new_class.save((err, my_class) => {
        if (err)
            res.send(err);
        res.json(my_class);
    });
};

exports.read_a_class = (req, res) => {
    Class.findById(req.params.classId, (err, my_class) => {
        if (err)
            res.send(err);
        res.json(my_class);
    });
};

exports.update_a_class = (req, res) => {
    Class.findOneAndUpdate({ _id: req.params.classId }, req.body, { new: true }, (err, my_class) => {
        if (err)
            res.send(err);
        res.json(my_class);
    });
};

exports.delete_a_class = (req, res) => {
    Class.remove({
        _id: req.params.classId
    }, (err, my_class) => {
        if (err)
            res.send(err);
        res.json({ message: 'Class sucessfully deleted' });
    });
};