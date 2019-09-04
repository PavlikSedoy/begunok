// Libs
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

// Styles
import './Reviews.scss'

function Reviews(props) {
  return (
    <section className="Reviews dark-section">
      <Container>
        <SectionTitle
          color={2}
          sectionNumber='04'
        >
          Отзывы
        </SectionTitle>

        <div className="Reviews__desc">
          <h3 className="Reviews__descTitle">Наши клиенты - наши друзья</h3>
          <p className="Reviews__descParagraph">Мы стараемся делать все чтобы вы к нам вернулись.</p>
        </div>
      </Container>
    </section>
  )
}

Reviews.propTypes = {

}

export default Reviews

