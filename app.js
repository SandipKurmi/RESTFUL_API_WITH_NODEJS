const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
require('dotenv/config')
app.use(bodyParser.json())
const postsRoute = require('./routes/posts') //import routes
    //middlewares
    // app.use(auth)   //every time we going to spasific route this is gone a run
app.use('/posts', postsRoute) //route middlewares


//routes 
app.get('/', (req, res) => res.send('Hello World!'))

//conect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, }, () => console.log('connect to db'))

//how to we start listening to the server
app.listen(port, () => console.log(`listening on port ${port}!`))