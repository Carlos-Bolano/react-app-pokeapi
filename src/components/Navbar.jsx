import React from 'react'

function Navbar() {
  return ( <nav className="bg-navbar">
  <div className="navbar-container">
    <a> 
      <img src=" https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
      className='img-logo' />
      </a>
    <form className="container-form">
      <input className=" " type="search" placeholder="Search" aria-label="Search" />
      <button className="" type="submit">Search</button>
    </form>
  </div>
</nav>
   
  )
}

export default Navbar