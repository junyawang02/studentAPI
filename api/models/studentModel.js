'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    first_name: {
        type: String,
        require: 'Enter the student\'s first name'
    },
    last_name: {
        type: String,
        require: 'Enter the student\'s last name'
    },
    phone_number: {
        type: String,
        require: 'Enter the student\'s phone number'
    },
    year: {
        type: [{
            type: Number,
            enum: [1, 2, 3, 4]
        }],
        default: [1]
    }
});

module.exports = mongoose.model('Students', StudentSchema);