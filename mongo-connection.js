const mongoose = require('mongoose')
const connectionString = require ('./connection-string')

async function main() {
  await mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true})
  console.log('connected')
}

main()