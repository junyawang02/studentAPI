'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enrollmentSchema = new Schema({
    class_Id: {
        type: String,
        require: 'Enter the class ID'
    },
    student_Id: {
        type: String,
        require: 'Enter the student ID'
    },
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);