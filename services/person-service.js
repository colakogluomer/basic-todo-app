const BaseService = require('./base-service')
const PersonModel = require('../models/person')

class PersonService extends BaseService {
    model = PersonModel
    
    async PersonalTodoAdd(person, todo){
        person.todos.push(todo)
        await person.save()
    }

}

module.exports = new PersonService()