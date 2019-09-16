import React, { Component } from 'react'

// Components
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

// Styles
import './Faq.scss'

export default class Faq extends Component {
  render() {
    return (
      <section className="Faq">
        <Container>
          <SectionTitle
            color={2}
            sectionNumber='07'
          >Hi</SectionTitle>
        </Container>
      </section>
    )
  }
}
