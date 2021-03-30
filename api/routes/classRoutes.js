'use strict';
module.exports = function (app) {
    var Class = require('../controllers/classController');

    app.route('/classes')
        .get(Class.list_all_classes)
        .post(Class.create_a_class);

    app.route('/classes/:classId')
        .get(Class.read_a_class)
        .put(Class.update_a_class)
        .delete(Class.delete_a_class);
};