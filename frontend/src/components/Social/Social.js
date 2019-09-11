import React from 'react'
// import PropTypes from 'prop-types'
import './Social.scss'

function Social(props) {
  return (
    <div className="Social">
      <div className="Social__item">
        <a href="/" className="Social__link" target="_blank">
          <div className="Social__icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16">
              <path fill="#ffffff" d="M8,3.9C5.7,3.9,3.9,5.7,3.9,8c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1C12.1,5.7,10.3,3.9,8,3.9z M8,10.7 c-1.5,0-2.7-1.2-2.7-2.7S6.5,5.3,8,5.3c1.5,0,2.7,1.2,2.7,2.7S9.5,10.7,8,10.7z M13.2,3.7c0,0.5-0.4,1-1,1c-0.5,0-1-0.4-1-1 c0-0.5,0.4-1,1-1C12.8,2.8,13.2,3.2,13.2,3.7z M15.9, 4.7c-0.1-1.3-0.4-2.4-1.3-3.4c-0.9-0.9-2.1-1.2-3.4-1.3C10,0,6,0,4.7,0.1 C3.4,0.1,2.3,0.4,1.3,1.3C0.4,2.3,0.1,3.4,0.1,4.7C0,6,0,10,0.1,11.3c0.1,1.3,0.4,2.4,1.3,3.4c0.9,0.9,2.1,1.2,3.4,1.3 C6,16,10,16,11.3,15.9c1.3-0.1,2.4-0.4,3.4-1.3c0.9-0.9,1.2-2.1,1.3-3.4C16,10,16,6,15.9,4.7z M14.2,12.7c-0.3,0.7-0.8,1.2-1.5,1.5 c-1.1,0.4-3.6,0.3-4.7,0.3c-1.2,0-3.7,0.1-4.7-0.3C2.6,14,2,13.4,1.8,12.7C1.3,11.7,1.4,9.2,1.4,8S1.4,4.3,1.8,3.3 C2,2.6,2.6,2,3.3,1.8C4.3,1.3,6.8,1.4,8,1.4c1.2,0,3.7-0.1,4.7,0.3C13.4,2,14,2.6,14.2,3.3c0.4,1.1,0.3,3.6,0.3,4.7 S14.7,11.7,14.2,12.7z"/>
            </svg>
          </div>
        </a>
      </div>
      <div className="Social__item">
        <a href="/" className="Social__link" target="_blank">
          <div className="Social__icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16">
              <path fill="#ffffff" d="M8,9l0.4-2.9H5.7V4.2c0-0.8,0.4-1.6,1.6-1.6h1.3V0.2c0,0-1.1-0.2-2.2-0.2C4,0,2.5,1.4,2.5 3.9v2.2H0V9h2.5v7 h3.1V9H8z"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

// Social.propTypes = {

// }

export default Social

