const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },

    description:{
        type: String,
        required: true,
        minlength: 1   
    },

    date:{
        type: Date,
        required: false,
        
    }

    

})

const TodoModel = mongoose.model('Todo', TodoSchema)

module.exports = TodoModel