'use strict';
module.exports = function (app) {
    var student = require('../controllers/studentController');

    app.route('/students')
        .get(student.list_all_students)
        .post(student.register_a_student);

    app.route('/students/:studentId')
        .get(student.read_a_student)
        .put(student.update_a_student)
        .delete(student.delete_a_student);
};