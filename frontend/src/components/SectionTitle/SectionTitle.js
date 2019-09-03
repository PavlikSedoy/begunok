import React from 'react'
import PropTypes from 'prop-types'
import './SectionTitle.scss'

function SectionTitle(props) {
 
  // Title color class
  const titleColor = props.color === 1 ? 'black' : 'white'
  const sectionNumber = props.sectionNumber

  return (
    <div className="SectionTitle">
      <div className="SectionTitle__number">{sectionNumber}</div>
      <h2 className={"SectionTitle__title " + titleColor}>{props.children}</h2>
    </div>
  )
}

SectionTitle.propTypes = {
  addClassName: PropTypes.string,
  children: PropTypes.string,
  color: PropTypes.number.isRequired,
  sectionNumber: PropTypes.string.isRequired
}

export default SectionTitle

