const express = require('express')
const bodyParser = require('body-parser')

const personRouter = require('./routes/person')
const todoRouter = require('./routes/todo')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())


app.use('/person', personRouter)
app.use('/todo',todoRouter)

app.get('/', (req, res) => {
    res.render('index')
  })

app.listen(3001, () => {
    console.log('Server listening')
  })
  