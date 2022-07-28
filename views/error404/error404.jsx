const React = require('react');
const Def = require('../default');

function error404(){
  return(
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>oopsie, made a poopsie, i cant seem to find dis page!!! oowoo</p>
        <img src="/images/gigachad.jpg" alt="a nice looking young man" />
      </main>
    </Def>
  )
}

module.exports = error404;
