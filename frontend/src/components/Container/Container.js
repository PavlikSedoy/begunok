import React from 'react'
import './Container.scss'

const Container = (props) => {
  const containerClass = props.devClass ? "Container " + props.devClass : "Container"

  return (
    <div className={containerClass}>
      { props.children }
    </div>
  )
}

export default Container