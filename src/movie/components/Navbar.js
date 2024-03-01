import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar bg-dark text-light shadow-lg p-4'>
        <div className='container-fluid d-flex flex-column justify-content-center'>
            <h1 className='text-center w-full fst-italic' style={{fontSize:'32px'}}>Netsonia</h1>
            <span className='text-center'>Discover, Indulge and Explore the World of Movies</span>
        </div>
    </nav>
  )
}

export default Navbar;