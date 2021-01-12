const express = require('express')
const router = express.Router()

const  PersonService = require('../services/person-service')


router.get('/all', async (req, res) => {
  const people = await PersonService.findAll()
  res.render('list', { items: people })
})

router.get('/:id', async(req, res) => {
  const person = await PersonService.find(req.params.id)
  res.render('data', {data: person})
})

router.post('/', async(req, res) => {
  const addedPerson = await PersonService.add(req.body)
  res.render(addedPerson)
  console.log('Person has been added!')
})

router.delete('/:id', async(req, res) =>{
  const deletedPerson = await PersonService.del(req.params.id)
  res.send(deletedPerson)
  console.log('Person has been deleted!')
})


  
module.exports = router