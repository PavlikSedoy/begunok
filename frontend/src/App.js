import React, { Component } from 'react'
// Import Libs
import { Helmet } from 'react-helmet'
import { TimelineMax } from 'gsap'
// Components
import Header from './components/Header/Header'
import Social from './components/Social/Social'
import About from './components/About/About'
import HeadNav from './components/HeadNav/HeadNav'
import Why from './components/Why/Why'
import FreeConsultation from './components/FreeConsultation/FreeConsultation'
// Style
import './App.scss'

export default class App extends Component {

  state = {
    smallHeader: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if ( window.pageYOffset === 0 && this.state.smallHeader === true ) {
      this.setState({
        smallHeader: false
      })     
      this.minimizeNav()
    } else if ( window.pageYOffset > 0 && this.state.smallHeader === false ) {
      this.setState({
        smallHeader: true
      })
      this.minimizeNav()
    }
  }

  // NavBar animation
  minimizeNav = () => {
    // Gsap init
    var navTl = new TimelineMax()

    if (this.state.smallHeader) {
      navTl
        .to('.HeadNav__callbackBtn span', .2, {alpha: 0})
        .to('.HeadNav__callbackBtn span', .01, {display: 'none'}, .2)
        .to('.HeadNav__callbackBtn', .01, {borderColor: '#de2b2b'}, .2)
        .to('.HeadNav__callback', .3, {width: 40})
        .to('.HeadNav__callback', .3, {alpha: 0}, .3)
        .to('.HeadNav', .3, {background: 'rgba(31, 33, 42, 1)', height: 70}, .5)
        .to('.HeadNav__callback', .3, {position: 'fixed', bottom: 50, right: 50}, .5)
        .to('.HeadNav__callback', .3, {alpha: 1}, .8)
    } else {
      navTl
        .to('.HeadNav__callback', .3, {alpha: 0}, .2)
        .to('.HeadNav', .3, {background: 'rgba(31, 33, 42, 0)', height: 120}, .5)
        .to('.HeadNav__callback', .3, {width: 220, position: 'absolute', bottom: '-25', right: 0}, .5)
        .to('.HeadNav__callback', .3, {alpha: 1}, .8)
        .to('.HeadNav__callbackBtn span', .01, {display: 'block'}, .3)
        .to('.HeadNav__callbackBtn', .01, {borderColor: '#fff'}, .3)
        .to('.HeadNav__callbackBtn span', .2, {alpha: 1}, .3)
    }
  }

  render() {
    return (
      <>
        {/* Title and meta tags with Helmet */}
        <Helmet>
          <title>Title from Helmet Test</title>
          <meta name="description" content="Descriprion from Helmet" />
        </Helmet>
        <HeadNav />
        <Header />
        <Social />
        <About />
        <Why />
        <FreeConsultation />
      </>
    );
  }
}