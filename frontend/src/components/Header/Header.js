import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Container from '../Container/Container'
import HeadNav from '../HeadNav/HeadNav'
import Social from '../Social/Social'
import './Header.scss'

export default class Header extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className="Header">
        <div className="Header__bg"></div>
        <HeadNav />
        <Container devClass="Header__container">
          Header
          <div className="Header__carBg"></div>
        </Container>
        <Social />
      </div>
    )
  }
}
