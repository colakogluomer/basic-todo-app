const express = require('express')
const router = express.Router()
const PersonService = require('../services/person-service')
const TodoService = require('../services/todo-service')


router.get('/all', async (req, res) => {
  const people = await PersonService.findAll()
  //res.render('list', { items: people })
  res.send(people)
})

router.get('/:id', async(req, res) => {
  const person = await PersonService.find(req.params.id)
  res.render('data', {data: person})
})


router.post('/:id/todos', async(req, res) => {
  const person = await PersonService.find(req.params.id)
  const todo = await TodoService.add(req.body.todo)
  await PersonService.PersonalTodoAdd(person, todo)
  res.send(person)
  console.log('okey!')
})

router.post('/', async(req, res) => {
  const addedPerson = await PersonService.add(req.body)
  res.send(addedPerson)
  console.log('Person has been added!')
})

router.delete('/:id', async(req, res) =>{
  const deletedPerson = await PersonService.del(req.params.id)
  res.send(deletedPerson)
  console.log('Person has been deleted!')
})

  
module.exports = router