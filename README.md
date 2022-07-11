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