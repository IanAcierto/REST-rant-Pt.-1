const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {
    type: String,
    default: 'https://www.rover.com/blog/wp-content/uploads/2017/10/Screen-Shot-2017-11-01-at-11.13.54-AM.png'},
  cuisines: { type: String, },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type:Number,
    min:[1673, 'surely not that old?'],
    max:[new Date().getFullYear(), 'Hey this year is in the future!'],
  },
})

placeSchema.methods.showEstablished = function(){
  return`${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}
module.exports = mongoose.model('Place', placeSchema)


// let places = [{
//   name: 'H-Thai-ML',
//   city: 'Seattle',
//   state: 'WA',
//   cuisines: 'Thai, Pan-Asian',
//   pic: '/images/CurryZen.jpg'
// }, {
//   name: 'Coding Cat Cafe',
//   city: 'Phoenix',
//   state: 'AZ',
//   cuisines: 'Coffee, Bakery',
//   pic: '/images/hwaro.jpg'
// }]

// module.exports = {
//   places 
// }