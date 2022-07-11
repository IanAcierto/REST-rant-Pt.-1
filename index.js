//DEPENDENCIES
const express = require('express');

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.set('views', __dirname + '/views');
app.set('veiw engine', 'html')
app.engine('jsx', require('express-react-views').createEngine())

//PLACES??
app.use('/places', require('./controllers/places'))

//ROUTES
app.get('/', (req, res) => {
res.render('home')
})
app.get('*', (req,res) =>{
  res.status(404).render('error404')
})

//LISTEN
app.listen(PORT, (req,res) => {
  console.log('listening on ' + PORT)
})