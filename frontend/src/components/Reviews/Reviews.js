// Libs
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Swiper from 'swiper'

// Components
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

// Styles
import './Reviews.scss'

// Images
import reviewsScreen from '../../images/Reviews/review.png'

export default class Reviews extends Component {

  componentDidMount() {
    const reviewsSlider = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    })
  }
  

  render() {
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
    
          <div className="Reviews__slider">

            <div className="Reviews__borderIphone"></div>

            {/* Slider main container */}
            <div className="swiper-container">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                    {/* Slides */}
                    <div className="swiper-slide">
                      <img src={reviewsScreen} alt="Alt for review" className="Reviews__itemImg"/>
                    </div>
                    <div className="swiper-slide">
                      <img src={reviewsScreen} alt="Alt for review" className="Reviews__itemImg"/>
                    </div>
                    <div className="swiper-slide">
                      <img src={reviewsScreen} alt="Alt for review"   className="Reviews__itemImg"/>
                    </div>
                    <div className="swiper-slide">
                      <img src={reviewsScreen} alt="Alt for review"   className="Reviews__itemImg"/>
                    </div>
                    <div className="swiper-slide">
                      <img src={reviewsScreen} alt="Alt for review" className="Reviews__itemImg"/>
                    </div>
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination"></div>
    
                {/* If we need navigation buttons */}
                <div className="swiper-button-prev">
                  <div className="Reviews__sliderNavShadow"></div>
                  <div className="Reviews__sliderNavBtn">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                      <path fill="#DE2B2B" d="M2.8,0.1L0.1,2.7C0,2.9,0,3.1,0.1,3.3l2.7,2.6C3,6,3.3,6,3.4,5.9c0.2-0.2,0.2-0.4 0-0.6l-2-1.9H14V2.6H1.4 l2-1.9c0.2-0.2,0.2-0.4,0-0.6C3.3,0,3,0,2.8,0.1z"/>
                    </svg>
                  </div>
                </div>
                <div className="swiper-button-next">
                  <div className="Reviews__sliderNavShadow"></div>
                  <div className="Reviews__sliderNavBtn">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                      <path fill="#DE2B2B" d="M10.6,0.1c-0.2,0.2-0.2,0.4,0,0.6l2,1.9H0l0,0.8h12.6l-2,1.9c-0.2,0.2-0.2,0.4,0,0.6C10.7,6,11,6,11.2,5.9 l2.7-2.6c0.2-0.2,0.2-0.4,0-0.6l-2.7-2.6C11,0,10.7,0,10.6,0.1z"/>
                    </svg>
                  </div>
                </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }
}

Reviews.propTypes = {

}