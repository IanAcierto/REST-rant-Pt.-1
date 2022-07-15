{/*
import React
Import Default
function for making a new form
  Default Wrapper
  make a form that posts  to /places
    formGroup for div classNames
    formControl for Input classNames
    place name
    place picture
    City
    State
    Cuisines
    submit input with the value of Add Place?
    certain info required
export the function
make new route in places controller
*/}
const React = require('react');
const Def = require('../default')

function new_form(){
  return(
    <Def>
      <main>
        <h1> Add a New Place</h1>
        <form method="POST" action="/places">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input id="name" name="name" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="pic">Picture</label>
            <input id="pic" name="pic"></input>
          </div>
          <div className="form-group">
            <label htmlFor="">City</label>
            <input id="city" name="city"></input>
          </div>
          <div className="form-group">
            <label htmlFor="">State</label>
            <input id="state" name="state"></input>
          </div>
          <div className="form-group">
            <label htmlFor="">Cuisines</label>
            <input id="cuisines" name="cuisines" required></input>
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place"/>
        </form>
      </main>
    </Def>
  )
}

module.exports = new_form