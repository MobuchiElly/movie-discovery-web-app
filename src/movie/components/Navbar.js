import React from 'react'
import { auth } from './Auth/firebase'


const Navbar = () => {
  return (
    <nav className='navbar bg-dark text-light shadow-lg'>
        <div className='container-fluid d-flex justify-content-center'>
            <h1 className='text-center'>Movie Discovery Application</h1>
        </div>
    </nav>
  )
}

export default Navbar