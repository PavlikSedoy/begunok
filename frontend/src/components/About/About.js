import React from 'react'
// import PropTypes from 'prop-types'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import './About.scss'

function About(props) {
  return (
    <section className="About">
      <Container>
        <SectionTitle
          color={1}
          sectionNumber='01'
        >
          О нас
        </SectionTitle>
      </Container>
    </section>
  )
}

// About.propTypes = {

// }

export default About

