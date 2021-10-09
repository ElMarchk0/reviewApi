//Old dependencies
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const cors = require("cors")
// const ReviewRoute = require('./routes/index')
//New Dependencies
import express from "express"
import cors from "cors"
import router from "./routes/index.js"
const app = express()

// app.use('/reviews', router)

//New Code 
app.use(cors())
app.use(express.json())
app.use('/', router)

app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app


//Old shit
const PORT = process.env.PORT || 4000

// //database
// const uri = "mongodb+srv://emarchk0:97forthewin@cluster0.hl0jb.mongodb.net/beer_reviews?retryWrites=true&w=majority"

// mongoose.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log('MongoDB Connected')
//     })
//     .catch(err => console.log(err))

// // middleware
// app.use(bodyParser.json())
// app.use(cors())

// //launch server
// app.get('/', (req, res) => {
//     res.send('Hola')
// })

// const ReviewRoute = require('./routes/index')
// app.use('/reviews', ReviewRoute)

// app.listen(process.env.PORT, () => {
//     console.log(`Live on ${PORT}`)
// })