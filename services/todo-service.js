const BaseService = require('./base-service')
const TodoModel = require('../models/todo')


class TodoService extends BaseService{
    model = TodoModel
}

module.exports = new TodoService()
