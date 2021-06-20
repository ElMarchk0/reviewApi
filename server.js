const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors")

const app = express()
const PORT = 4000

//database
const uri = "mongodb+srv://emarchk0:97forthewin@cluster0.hl0jb.mongodb.net/beer_reviews?retryWrites=true&w=majority"

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected')
})
.catch(err => console.log(err))

// middleware
app.use(bodyParser.json())
app.use(cors())

//launch server
app.get('/', (req,res) => {
  res.send('Hola')
})

const ReviewRoute = require('./routes/index')
app.use('/reviews', ReviewRoute)

app.listen(PORT, () => {
  console.log(`Live on ${PORT}`)
})