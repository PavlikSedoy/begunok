import React from 'react'
import PropTypes from 'prop-types'
import './DefaultBtn.scss'

function DefaultBtn(props) {

  const { padding, buttonId } = props
  const buttonType = props.buttonType ? props.buttonType : 'button'

  return (
    <button
      type={buttonType}
      className="DefaultBtn"
      id={buttonId}
    >
      <div
        className="DefaultBtn__wr"
        style={{padding: '20px ' + padding + 'px'}}
      >
        <div className="DefaultBtn__ripple"></div>
        <span className="DefaultBtn__text">{props.children}</span>
        <div className="DefaultBtn__shadow"></div>
      </div>
    </button>
  )
}

DefaultBtn.propTypes = {
  children: PropTypes.string.isRequired,
  padding: PropTypes.number
}

export default DefaultBtn

