// Libs
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container/Container'
import DefaultBtn from '../DefaultBtn/DefaultBtn'

// Style
import './FreeConsultation.scss'

const placehodlerHandleClick = id => {
  const input = document.getElementById(id)
  input.focus()
}

const inputFocusHandler = wrId => {
  const wr = document.getElementById(wrId)
  wr.classList.add('inFocus')
}

const inputBlurHandler = (e, wrId) => {
  const inputValue = e.target.value,
        wr = document.getElementById(wrId)

  if ( inputValue.length === 0 ) wr.classList.remove('inFocus')
}

function FreeConsultation(props) {
  return (
    <section className="FreeConsultation">
      <Container devClass="FreeConsultation__container">
        <h3 className="FreeConsultation__title">Бесплатная консультация:</h3>
        <form className="FreeConsultation__from">
          <div className="input__wr FreeConsultation__input" id="freeConsPhoneWr">
            <input
              className="input__input"
              type="text"
              inputMode="tel"
              id="freeConsultationPhone"
              onFocus={() => (inputFocusHandler('freeConsPhoneWr'))}
              onBlur={(e) => (inputBlurHandler(e, 'freeConsPhoneWr'))}
            />
            <div
              className="input__placeholder"
              onClick={() => (placehodlerHandleClick('freeConsultationPhone'))}
            >
              Ваш телефон
            </div>
            <div className="input__icon">
              <svg width="22px" height="22px" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                <path fill="#1f212a" d="M20.4,15.8c-3.2-2.5-4-1.3-5.5,0.1c-1,1-3.5-1.1-5.7-3.3C7.1,10.5,5,8,6,7c1.5-1.4,2.7-2.2,0.2-5.4 C3.7-1.6,2,0.8,0.6,2.2C-1,3.8,0.6,9.8,6.4,15.6c5.9,5.9,11.7,7.3,13.4,5.8C21.3,20.1,23.6,18.4,20.4,15.8z"/>
              </svg>
            </div>
          </div>
          <div className="FreeConsultation__button">
            <DefaultBtn
              padding={40}
              buttonId='freeConsultationBtn'
            >
              Получить консультацию
            </DefaultBtn>
          </div>
        </form>
      </Container>
    </section>
  )
}

FreeConsultation.propTypes = {

}

export default FreeConsultation

