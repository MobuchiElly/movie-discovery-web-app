import React from 'react'
import './index.css'

const Loader = () => {
  return (
    <body className='loader'>
        <div className="container d-flex justify-content-center spinner-border" role="status">
            <span className="sr-only"><h3>Loading...</h3></span>
        </div>
    </body>
  )
}

export default Loader