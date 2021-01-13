const express = require('express')

const router = express.Router()
const TodoService = require('../services/todo-service')


router.get('/all', async (req, res) =>{
    const todos = await TodoService.findAll()
    res.render('list', {items: todos})
    console.log('okey')
})

router.delete('/:id', async (req, res) => {
    await TodoService.del(req.params.id)
    res.send('Todo has been deleted!')
})


module.exports = router


