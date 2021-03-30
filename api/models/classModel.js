'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
    name: {
        type: String,
        require: 'Enter the class name'
    },
    code: {
        type: String,
        require: 'Enter the class code'
    },
    teacher: {
        type: String,
        require: 'Enter the teacher\'s name'
    },
});

module.exports = mongoose.model('Classes', classSchema);