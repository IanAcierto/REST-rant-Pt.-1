const React = require('react');
const Def = require ('../default');

function home(){
  return(
    <Def>
      <main>
        <h1>Home</h1>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
        <img src="/images/Curry.jpg" alt="curry"/>
        <div>
        Photo by <a href="https://unsplash.com/@pushpak88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pushpak Dsilva</a> on <a href="https://unsplash.com/s/photos/curry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
        </div>
      </main>
    </Def>
  )
}

module.exports = home;