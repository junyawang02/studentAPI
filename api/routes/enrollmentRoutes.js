'use strict';
module.exports = function (app) {
    var Class = require('../controllers/enrollmentController');

    app.route('/enrollment')
        .get(Class.list_all_enrollments)
        .post(Class.create_a_enrollment);

    app.route('/enrollment/:enrollmentId')
        .get(Class.read_a_enrollment)
        .put(Class.update_a_enrollment)
        .delete(Class.delete_a_enrollment);
};