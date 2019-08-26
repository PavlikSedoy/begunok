import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Container from '../Container/Container'
import './Header.scss'

export default class Header extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className="Header">
        <Container>
          Header
        </Container>
      </div>
    )
  }
}
