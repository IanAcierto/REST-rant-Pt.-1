const { Router } = require('express')

const router = require('express').Router() 
const places = require('../models/places')

router.get('/',(req, res) => {  
  res.render('places/index', {places})
})
router.post('/',(req, res) =>{
  console.log(req.body)
  {/*default pic and state */}
  if(!req.body.pic){
    req.body.pic = 'http://http://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city = 'ANYTOWN'
  }
  if(!req.body.state){
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})
router.get('/new', (req, res)=>{
  res.render('places/new')  
})
router.get('/:id', (req, res)=>{
  res.send('router index array')
})
router.get('/show', (req, res)=>{{
  res.render()
})
module.exports = router