//DEPENDENCIES
const express = require('express');

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//PLACES??
app.use('/places', require('./controllers/places'))
//ROUTES
app.get('/', (req, res) => {
res.send('GET /places')
})
app.get('*', (req,res) =>{
  res.status(404).send('<h1>404 Page Not Found</h1>')
})


//LISTEN
app.listen(PORT, (req,res) => {
  console.log('listening on ' + PORT)
})