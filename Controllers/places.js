const { Router } = require('express')

const router = require('express').Router()

router.get('/',(req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/CurryZen.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/hwaro.jpg'
  }]
  
  res.render('places/index', {places})
})
router.get('/new', (req, res)=>{
  res.render('places/new')  
})
router.get(':id', (req, res)=>{
  res.send('router index array')
})
module.exports = router