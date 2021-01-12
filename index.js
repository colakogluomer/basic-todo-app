const express = require('express')
const bodyParser = require('body-parser')

const personRouter = require('./routes/person')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use('/person', personRouter)

app.get('/', (req, res) => {
    res.render('index')
  })

app.listen(3001, () => {
    console.log('Server listening')
  })
  