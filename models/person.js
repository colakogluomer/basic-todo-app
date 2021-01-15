
const mongoose = require('mongoose')


const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },

    surname: {
        type: String,
        required: true,
        minlength: 2 
    },

    age: {
        type: Number,
        required: true,
        min: 18
    },

    todos: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Todo',
        autopopulate: { 
            maxDepth: 1
        }
    }]

})


PersonSchema.plugin(require('mongoose-autopopulate'))

const PersonModel = mongoose.model('Person', PersonSchema)

module.exports = PersonModel