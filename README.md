a# Project REST-Rant

REST-Rant is an app where users can review restaurants.

what routes do i want?

get: /places - places an index page
POST: /places - Creates a new place
GET /places/new - form a page for creating a new place
GET: /places/:id - update a particular place
PUT /places/:id - update a particular place
GET /places/:id/edit - Form page for editing an existing place
DELETE /places/:id - delete a particular place
POST /places/:id/rant- Create a rant(comment) about a particular place
DELETE /places/:id/rant/:rantId - Delete a rant about a particular place
GET * - 404 page

places should have a name, city, state, cuisines, and a pic

part 6 todo
make a navbar
  put navbar in default.jsx
    home
    places
    places/new
  style the navbar
  center the body
add a show  route to views
in the /:id route in the places controller, render places/show
  decide what id is
  ID is a number
  let id = Number(req .params.id)
    if(isNaN(id)){
      
    }
  if there's no index in places that match the route send 404
pass the data in viewse
  res.render('places/show', {place:places[id]})

god this is exhausting

fill out the show page
  {data.place.name}
  add a rating section and a comments section
  make a delete button and edit button
    forms that post
  
  implement delete route
    delete items from the array
    after you can redirect to /places page
    




implement method override



