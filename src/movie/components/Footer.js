import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='text'>
            <h3><i>Copyright: Buchi Dev</i></h3>
            <div className='logos'>
              <span className='linkedin'>
              <a href="https://www.linkedin.com/in/eleazer-ugwu-662211200/" target="_blank" rel="noopener noreferrer">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
              </a>
              </span>
              <span className='github'>
              <a href="https://github.com/MobuchiElly" target="_blank" rel="noopener noreferrer"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
              </span>
            </div>
        </div>
    </div>
  )
}

export default Footer