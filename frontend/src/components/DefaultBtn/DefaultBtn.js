import React from 'react'
import PropTypes from 'prop-types'
import './DefaultBtn.scss'

function DefaultBtn(props) {
  return (
    <button type="button" className="DefaultBtn">
      <div className="DefaultBtn__wr">
        <span className="DefaultBtn__text">{props.children}</span>
        <div className="DefaultBtn__shadow"></div>
      </div>
    </button>
  )
}

DefaultBtn.propTypes = {

}

export default DefaultBtn
