// Libs
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

// Styles
import './BestPrice.scss'

function BestPrice(props) {
  return (
    <section className='BestPrice'>
      <Container>
        <SectionTitle
          color={1}
          sectionNumber='05'
        >
          Лучшие предложения
        </SectionTitle>
      </Container>
    </section>
  )
}

BestPrice.propTypes = {

}

export default BestPrice

