// Libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import DefaultBtn from '../DefaultBtn/DefaultBtn'

// Style
import './Order.scss'

export default class Order extends Component {
  static propTypes = {

  }

  placehodlerHandleClick = id => {
    const input = document.getElementById(id)
    input.focus()
  }
  
  inputFocusHandler = wrId => {
    const wr = document.getElementById(wrId)
    wr.classList.add('inFocus')
  }
  
  inputBlurHandler = (e, wrId) => {
    const inputValue = e.target.value,
          wr = document.getElementById(wrId)
  
    if ( inputValue.length === 0 ) wr.classList.remove('inFocus')
  }

  render() {
    return (
      <section className="Order dark-section">
        <Container
          devClass="Order__container"
        >
          <SectionTitle
            color={2}
            sectionNumber='06'
          >
            Заказ
          </SectionTitle>

          <div className="Order__content">
            <h2 className="Order__desc">Заполните простую форму заявки<br /> и наши сотрудники подберут то что вам нужно</h2>
            <p className="Order__moreInfo"><span>*</span> поля обязательные для заполнения</p>

            <form className="Order__form" id="orderForm">
              <div className="input__wr Order__input" id="vinWr">
                <input
                  className="input__input"
                  type="text"
                  id="vinInput"
                  onFocus={() => (this.inputFocusHandler('vinWr'))}
                  onBlur={(e) => (this.inputBlurHandler(e, 'vinWr'))}
                  required
                />
                <div
                  className="input__placeholder"
                  onClick={() => (this.placehodlerHandleClick('vinInput'))}
                >
                  Vin code (17 цифр) <span>*</span>
                </div>
                <div className="input__icon">
                  <svg version="1.1"xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32px" height="22px">
                    <path fill="#1f212a" d="M31.7,9.9c-0.1-0.5-1.2-1.6-1.6-2c-0.2-0.2-1.1-0.9-1.3-1.1c-0.2-0.1-0.2-0.1-0.2-0.2c0-0.1,0-0.1-0.1-0.1
                      c0,0.1,0.1,0.1,0.1,0.1c0.1-0.1,0.3-0.1,0.4-0.1c0.1,0.1,0.1,0.2,0.3,0.2c0.2,0.1,0.4-0.1,0.6-0.1c0.4-0.1,0.7-0.1,1.1-0.2
                      c0.6-0.1,0.8-0.7,0.7-1.2c-0.1-0.5-0.6-0.7-1-0.7c-0.4-0.1-1-0.2-1.4,0c-0.6,0.4-0.4,1.4-1.2,1.2c0.1,0.1,0.1,0.1,0.1,0.2
                      c0-0.1-0.1-0.1-0.1-0.2c-0.7-1.2-2.7-4.4-2.9-4.6c-0.2-0.2-0.6-0.6-1.3-0.7C23.5,0.3,17.1,0,16,0S8.4,0.3,7.8,0.4S6.8,0.9,6.6,1.1
                      C6.4,1.3,4.3,4.5,3.7,5.7C3.6,5.9,3.5,6,3.5,6.1C3.5,6,3.6,5.9,3.7,5.7C2.8,5.9,3,4.8,2.4,4.5c-0.4-0.2-1-0.1-1.4,0
                      C0.7,4.5,0.1,4.7,0.1,5.2C0.1,5.8,0.3,6.3,0.9,6.5C1.2,6.5,1.6,6.6,2,6.6c0.2,0,0.4,0.1,0.6,0.1c0.1-0.1,0.2-0.2,0.3-0.2
                      c0.1-0.1,0.3,0,0.4,0.1c0-0.1,0.1-0.1,0.1-0.2C3.4,6.5,3.4,6.6,3.4,6.6C3.3,6.7,3.1,6.8,3,6.8C2.9,7,2.2,7.5,1.8,7.8
                      C1.2,8.5,0.2,9.3,0.2,9.9c0,0.5-0.2,0.9-0.2,1.9c0,0.5,0.2,2.1,0.3,3.5c0.1,1.6,0.3,3,0.3,3.1c0,0.2-0.1,0.5,0.1,0.7
                      s0.4,0.2,0.7,0.2c0.1,0,1.4,0,3.2,0.1C8.9,19.5,16,19.5,16,19.5s7.3-0.1,11.6-0.2c1.7,0,2.9-0.1,3-0.1c0.4,0,0.6-0.1,0.7-0.2
                      c0.1-0.2,0-0.4,0.1-0.7c0-0.2,0.2-2.8,0.4-4.7c0.1-0.9,0.1-1.6,0.1-1.9C32,10.8,31.8,10.4,31.7,9.9z M29.3,9.5
                      c0.6,0,0.7-0.1,0.8,0.4c0.1,0.3,0.1,0.8,0,1.1c-0.2,1.1-1.6,1.1-2.5,1.1c-1.6,0-3,0.4-4.3-1.9c1.1-0.3,2.4-0.3,3.5-0.5
                      C27.6,9.6,28.5,9.5,29.3,9.5z M6.9,1.3L16,1L25,1.3c0,0,3.3,5.1,3,5.1C27.8,6.4,19.6,6,16,6C12.3,6,4.1,6.4,3.9,6.4
                      C3.7,6.4,6.9,1.3,6.9,1.3z M1.9,9.9C2,9.4,2.1,9.5,2.7,9.5c0.9,0,1.7,0.1,2.5,0.2c1.1,0.2,2.4,0.1,3.5,0.5c-1.3,2.3-2.7,1.9-4.3,1.9
                      c-0.9,0-2.2,0-2.5-1.1C1.8,10.8,1.8,10.3,1.9,9.9z M7.7,18.3c-0.6,0.2-1.8,0.2-2.4,0.2c-0.2,0-0.4,0-0.6,0c-0.5,0-1.1,0-1.6,0
                      c-0.2,0-0.5,0-0.7,0c-0.9,0-1.1-0.3-0.8-1.2c0.2-0.6,0.1-1.2,0.7-1.5c0.1-0.2,0.9-0.2,1.9-0.2c0.1,0,0.2,0,0.3,0
                      c0.3,0,0.7,0,1.1,0.1c0.2,0,0.4,0,0.6,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0
                      c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1,0h0.1h0.1c0.1,0,0.1,0,0.1,0
                      C8.8,16.8,8.6,18,7.7,18.3z M21.9,17.2c-0.3,0.9-1.6,0.7-1.7,0.7h-8.6c-0.1,0-1.4,0.1-1.7-0.7c-0.3-0.9-0.8-2.4-1-3
                      c-0.2-0.7-0.8-2.1,2.9-2c1.9,0.1,3.2,0.1,4.1,0c0.9,0,2.2,0,4.1,0c3.7-0.1,3,1.2,2.9,1.9C22.7,14.8,22.2,16.2,21.9,17.2z M29.6,18.3
                      c-0.7,0-1.4,0-2.1,0.1c-0.3,0-0.6,0-0.9,0c-0.6,0-1.9,0.1-2.4-0.1C23.5,18,23.2,16.8,23,16c0.1,0,0.1,0,0.2-0.1c0.1,0,0.2,0,0.3-0.1
                      c0.1,0,0.1,0,0.2,0h0.1c0.1,0,0.2,0,0.2-0.1c0.1,0,0.2,0,0.3-0.1c0.2,0,0.5-0.1,0.7-0.1c0.1,0,0.1,0,0.2,0c0.4,0,0.8-0.1,1.2-0.1
                      c0.1,0,0.2,0,0.3,0h0.2c0.1,0,0.2,0,0.2,0h0.2c1.1,0,1.9,0,2.2,0.1c0.7,0.2,0.6,0.9,0.7,1.5C30.6,18.1,30.5,18.3,29.6,18.3z
                      M1.4,19.9c-0.2,0-0.7,0-1.1-0.3v2.1c0,0.2,0.1,0.3,0.3,0.3h3.7c0.2,0,0.3-0.1,0.3-0.3v-1.7C4.7,20,1.4,19.9,1.4,19.9z M30.6,19.9
                      c0,0-1.2,0-3,0.1v1.7c0,0.2,0.1,0.3,0.3,0.3h3.7c0.2,0,0.3-0.1,0.3-0.3v-2.4C31.6,19.9,30.9,19.9,30.6,19.9z"/>
                    </svg>
                </div>
              </div>
              {/* End input */}

              <div className="input__wr Order__input" id="phoneWr">
                <input
                  className="input__input"
                  type="text"
                  inputMode="tel"
                  id="phoneInput"
                  onFocus={() => (this.inputFocusHandler('phoneWr'))}
                  onBlur={(e) => (this.inputBlurHandler(e, 'phoneWr'))}
                  required
                />
                <div
                  className="input__placeholder"
                  onClick={() => (this.placehodlerHandleClick('phoneInput'))}
                >
                  Ваш телефон <span>*</span>
                </div>
                <div className="input__icon">
                  <svg width="22px" height="22px" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                    <path fill="#1f212a" d="M20.4,15.8c-3.2-2.5-4-1.3-5.5,0.1c-1,1-3.5-1.1-5.7-3.3C7.1,10.5,5,8,6,7c1.5-1.4,2.7-2.2,0.2-5.4 C3.7-1.6,2,0.8,0.6,2.2C-1,3.8,0.6,9.8,6.4,15.6c5.9,5.9,11.7,7.3,13.4,5.8C21.3,20.1,23.6,18.4,20.4,15.8z"/>
                  </svg>
                </div>
              </div>
              {/* End input */}

              <div className="input__wr Order__input" id="emailWr">
                <input
                  className="input__input"
                  type="text"
                  inputMode="email"
                  id="emailInput"
                  onFocus={() => (this.inputFocusHandler('emailWr'))}
                  onBlur={(e) => (this.inputBlurHandler(e, 'emailWr'))}
                />
                <div
                  className="input__placeholder"
                  onClick={() => (this.placehodlerHandleClick('emailInput'))}
                >
                  Ваш e-mail
                </div>
                <div className="input__icon">
                  <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 31 22" width="31px" height="22px">
                    <path fill="#1f212a" d="M20.6,13.9c-0.7,0.4-1.2,0.8-1.6,1c-0.4,0.2-1,0.5-1.6,0.7c-0.7,0.2-1.3,0.4-1.9,0.4h-0.1
                    c-0.6,0-1.2-0.1-1.9-0.4c-0.7-0.2-1.2-0.5-1.6-0.7c-0.4-0.2-1-0.6-1.6-1c-0.2-0.1-0.4-0.2-0.6-0.4L1,21.4C1.5,21.8,2.1,22,2.8,22
                    h25.5c0.7,0,1.3-0.2,1.8-0.6l-8.8-8C21.1,13.6,20.9,13.7,20.6,13.9z M1.8,8.5C1.1,8.1,0.5,7.6,0,7.1v12.1l7.8-7
                    C6.2,11.2,4.2,9.9,1.8,8.5z M29.3,8.5c-2.4,1.4-4.4,2.7-6,3.7l7.8,7V7.1C30.5,7.6,29.9,8,29.3,8.5z M3,6.8C3.3,7,4.5,7.8,6.5,9
                    c1.1,0.7,2,1.2,2.8,1.7c0.7,0.4,1.3,0.8,1.8,1.1c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.3,0.2,0.5,0.3c0.4,0.2,0.7,0.4,0.9,0.6
                    c0.2,0.1,0.5,0.3,0.9,0.5c0.4,0.2,0.7,0.3,1,0.4s0.6,0.1,0.8,0.1h0.1c0.2,0,0.5-0.1,0.8-0.1c0.3-0.1,0.7-0.2,1-0.4
                    c0.4-0.2,0.7-0.4,0.9-0.5s0.5-0.4,0.9-0.6c0.2-0.1,0.4-0.2,0.5-0.3c0.1-0.1,0.2-0.1,0.2-0.2c0.4-0.2,1-0.6,1.8-1.1
                    c1.5-0.9,3.5-2.2,6.4-4c0.8-0.6,1.5-1.2,2.1-1.9c0.5-0.7,0.8-1.6,0.8-2.4c0-0.7-0.3-1.3-0.8-1.7C29.5,0.2,28.9,0,28.1,0H2.7
                    C1.9,0,1.2,0.2,0.7,0.8C0.2,1.4,0,2.1,0,2.9C0,3.5,0.3,4.2,1,5C1.6,5.7,2.2,6.3,3,6.8z"/>
                  </svg>
                </div>
              </div>
              {/* End input */}

              <div className="input__wr Order__input" id="nameWr">
                <input
                  className="input__input"
                  type="text"
                  id="nameInput"
                  onFocus={() => (this.inputFocusHandler('nameWr'))}
                  onBlur={(e) => (this.inputBlurHandler(e, 'nameWr'))}
                />
                <div
                  className="input__placeholder"
                  onClick={() => (this.placehodlerHandleClick('nameInput'))}
                >
                  Ваше имя
                </div>
                <div className="input__icon">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19px" height="22px">
                    <path fill="#1f212a" d="M13.9,11.2c0,0.1-0.1,0.1-0.1,0.1c-1.1,1.2-2.7,2-4.3,2c-1.6,0-3.1-0.7-4.3-2c0-0.1-0.1-0.1-0.1-0.1
                    c-3,1.3-5.1,4.2-5.1,7.5v2.1C0,21.5,0.5,22,1.2,22h16.7c0.7,0,1.2-0.5,1.2-1.1v-2.1C19,15.4,16.9,12.6,13.9,11.2z M9.5,11.2
                    c1.3,0,2.6-0.6,3.4-1.5c1-1,1.6-2.5,1.6-4.1c0-3.1-2.2-5.6-5-5.6c-2.8,0-5,2.5-5,5.6c0,1.6,0.6,3.1,1.6,4.1
                    C7,10.6,8.2,11.2,9.5,11.2z"/>
                  </svg>
                </div>
              </div>
              {/* End input */}

              <div className="input__wr Order__input" id="promoWr">
                <input
                  className="input__input"
                  type="text"
                  id="promoInput"
                  onFocus={() => (this.inputFocusHandler('promoWr'))}
                  onBlur={(e) => (this.inputBlurHandler(e, 'promoWr'))}
                />
                <div
                  className="input__placeholder"
                  onClick={() => (this.placehodlerHandleClick('promoInput'))}
                >
                  Промокод  (Если имеется)
                </div>
                <div className="input__icon">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19px" height="22px">
                    <path fill="#1f212a" d="M13.9,11.2c0,0.1-0.1,0.1-0.1,0.1c-1.1,1.2-2.7,2-4.3,2c-1.6,0-3.1-0.7-4.3-2c0-0.1-0.1-0.1-0.1-0.1
                    c-3,1.3-5.1,4.2-5.1,7.5v2.1C0,21.5,0.5,22,1.2,22h16.7c0.7,0,1.2-0.5,1.2-1.1v-2.1C19,15.4,16.9,12.6,13.9,11.2z M9.5,11.2
                    c1.3,0,2.6-0.6,3.4-1.5c1-1,1.6-2.5,1.6-4.1c0-3.1-2.2-5.6-5-5.6c-2.8,0-5,2.5-5,5.6c0,1.6,0.6,3.1,1.6,4.1
                    C7,10.6,8.2,11.2,9.5,11.2z"/>
                  </svg>
                </div>
              </div>
              {/* End input */}

              <div className="input__wr Order__input input__textareaWr" id="carPartsWr">
                <textarea
                  className="input__input input__textarea"
                  type="text"
                  id="carPartsInput"
                  onFocus={() => (this.inputFocusHandler('carPartsWr'))}
                  onBlur={(e) => (this.inputBlurHandler(e, 'carPartsWr'))}
                  required
                ></textarea>
                <div
                  className="input__placeholder"
                  onClick={() => (this.placehodlerHandleClick('carPartsInput'))}
                >
                  Нужная запчасть (запчасти) <span>*</span>
                </div>
                <div className="input__icon input__textareaIcon">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22px" height="22px">
                    <path fill="#1f212a" d="M19.9,11c0-1.5,0.8-2.8,2.1-3.5l-1.2-2l-1.2-2.1C19,3.8,18.3,4,17.6,4c-2.3,0-4.2-1.8-4.2-4H8.6 c0,2.2-1.9,4-4.2,4C3.7,4,3,3.9,2.4,3.5L0,7.5c1.3,0.7,2.1,2,2.1,3.5c0,1.5-0.8,2.8-2.1,3.5l2.4,4C3,18.1,3.7,18,4.4,18 c2.3,0,4.2,1.8,4.2,4h4.8c0-2.2,1.9-4,4.2-4c0.8,0,1.5,0.2,2.1,0.5l2.4-4C20.7,13.8,19.9,12.5,19.9,11z M11,16.6 c-2.5,0-4.7-1.6-5.5-3.7c-0.2-0.6-0.3-1.2-0.3-1.9c0-3.1,2.6-5.7,5.9-5.7c1.7,0,3.3,0.7,4.4,1.9c0.9,1,1.4,2.3,1.4,3.7 C16.9,14.1,14.2,16.6,11,16.6z M11,8c-1.7,0-3.1,1.3-3.1,3c0,1.7,1.4,3,3.1,3c1.7,0,3.1-1.3,3.1-3C14.1,9.3,12.7,8,11,8z M11,12.6 c-0.9,0-1.7-0.7-1.7-1.6s0.8-1.6,1.7-1.6s1.7,0.7,1.7,1.6S11.9,12.6,11,12.6z"/>
                  </svg>
                </div>
              </div>
              {/* End input */}

              <div className="input__checkboxBlock Order__checkbox">
                <div className="input__ckeckboxWr">
                  <input id="subscribe" type="checkbox" className="input__ckeckbox" />
                  <div className="input__pseudoInput">
                    <div className="input__pseudoChecked"></div>
                  </div>
                </div>
                <label className="input__checkboxText" htmlFor="subscribe">Я хочу получать акционные предложения</label>
              </div>

              <div className="Order__btnWr">
                <DefaultBtn
                  padding={40}
                  buttonId='sendOrder'
                  buttonType='submit'
                >
                  Оставить заявку
                </DefaultBtn>
              </div>
            </form>

            <div className="Order__contactsWr">
              <h3 className="Order__contactsTitle">Или свяжитесь с нами<br/> удобным для вас способом</h3>

              <div className="Order__contactsRow">
                <div className="Order__contactsItem Order__contactsItemPhone">
                  <div className="Order__contactsItem_icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 22 22">
                      <path fill="#DE2B2B" d="M20.4,15.8c-3.2-2.5-4-1.3-5.5,0.1c-1,1-3.5-1.1-5.7-3.3C7.1,10.5,5,8,6,7c1.5-1.4,2.7-2.2,0.2-5.4 S2,0.8,0.6,2.2c-1.6,1.6,0,7.6,5.8,13.4c5.9,5.9,11.7,7.3,13.4,5.8C21.3,20.1,23.6,18.4,20.4,15.8z"/>
                    </svg>
                  </div>
                  {/* End Icon */}
                  
                  <div className="Order__contactsItem_phonesWr">
                    <a href="tell:+380939299292" className="Order__contactsItem_phoneLink">+38 (093) 929 92 92</a>
                    <a href="tell:+380939299292" className="Order__contactsItem_phoneLink">+38 (093) 929 92 92</a>
                  </div>
                </div>
                {/* End Item */}
                <div className="Order__contactsItem">
                  <div className="Order__contactsItem_icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 31 22" width="24px" height="16px" >
                      <path fill="#DE2B2B" d="M20.6,13.9c-0.7,0.4-1.2,0.8-1.6,1s-1,0.5-1.6,0.7c-0.7,0.2-1.3,0.4-1.9,0.4h-0.1c-0.6,0-1.2-0.1-1.9-0.4
                      c-0.7-0.2-1.2-0.5-1.6-0.7c-0.4-0.2-1-0.6-1.6-1c-0.2-0.1-0.4-0.2-0.6-0.4L1,21.4C1.5,21.8,2.1,22,2.8,22h25.5
                      c0.7,0,1.3-0.2,1.8-0.6l-8.8-8C21.1,13.6,20.9,13.7,20.6,13.9z M1.8,8.5C1.1,8.1,0.5,7.6,0,7.1v12.1l7.8-7C6.2,11.2,4.2,9.9,1.8,8.5
                      z M29.3,8.5c-2.4,1.4-4.4,2.7-6,3.7l7.8,7V7.1C30.5,7.6,29.9,8,29.3,8.5z M3,6.8C3.3,7,4.5,7.8,6.5,9c1.1,0.7,2,1.2,2.8,1.7
                      c0.7,0.4,1.3,0.8,1.8,1.1c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.3,0.2,0.5,0.3c0.4,0.2,0.7,0.4,0.9,0.6c0.2,0.1,0.5,0.3,0.9,0.5
                      s0.7,0.3,1,0.4s0.6,0.1,0.8,0.1h0.1c0.2,0,0.5-0.1,0.8-0.1c0.3-0.1,0.7-0.2,1-0.4c0.4-0.2,0.7-0.4,0.9-0.5s0.5-0.4,0.9-0.6
                      c0.2-0.1,0.4-0.2,0.5-0.3s0.2-0.1,0.2-0.2c0.4-0.2,1-0.6,1.8-1.1c1.5-0.9,3.5-2.2,6.4-4c0.8-0.6,1.5-1.2,2.1-1.9
                      c0.5-0.7,0.8-1.6,0.8-2.4c0-0.7-0.3-1.3-0.8-1.7c-0.6-0.5-1.2-0.7-2-0.7H2.7c-0.8,0-1.5,0.2-2,0.8S0,2.1,0,2.9C0,3.5,0.3,4.2,1,5
                      C1.6,5.7,2.2,6.3,3,6.8z"/>
                    </svg>
                  </div>
                  {/* End Icon */}
                  
                  <div className="Order__contactsItem_phonesWr">
                    <a href="mailto:begunokinfo@begunok.in.ua" className="Order__contactsItem_phoneLink Order__contactsItem_emailLink">begunokinfo@begunok.in.ua</a>
                  </div>
                </div>
                {/* End Item */}
                <div className="Order__contactsItem">
                  <div className="Order__contactsItem_icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 16" width="20px" height="16px">
                      <path fill="#DE2B2B" d="M8.1,2.4C3.6,2.4,0,5.1,0,8.6c0,1.7,0.9,3.2,2.2,4.3c-0.1,1.1-0.4,2.4-1.1,3.2c1.6,0,3.2-1,4.2-1.7
                      c0.9,0.2,1.7,0.4,2.7,0.4c4.5,0,8.1-2.7,8.1-6.1S12.5,2.4,8.1,2.4z M18.8,9.2c0.7-0.9,1.1-2,1.1-3.1c0-3.4-3.6-6.1-8.1-6.1
                      c-2,0-3.7,0.5-5.2,1.5C7.3,1.3,8,1.2,8.7,1.2c4.8,0,8.7,3.1,8.7,6.7c0,1.5-0.6,2.8-1.6,3.9c1,0.7,2.6,1.7,4.2,1.7
                      C18.9,12.6,18.8,10.3,18.8,9.2z"/>
                    </svg>
                  </div>
                  {/* End Icon */}
                  
                  <div className="Order__contactsItem_phonesWr">
                    <a href="viber://chat?number=+380939299292" className="Order__contactsItem_phoneLink Order__contactsItem_socialLink">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.2 16" width="24px" height="24px">
                        <path fill="#ffffff" d="M13.5,1.6C13.1,1.2,11.5,0,7.9,0c0,0-4.2-0.3-6.3,1.6C0.5,2.8,0.1,4.5,0,6.5c0,2.1-0.1,6,3.7,7h0l0,1.6
                        c0,0,0,0.7,0.4,0.8c0.5,0.2,0.8-0.3,1.3-0.9c0.3-0.3,0.6-0.7,0.9-1.1c2.6,0.2,4.5-0.3,4.8-0.4c0.5-0.2,3.5-0.5,3.9-4.4
                        C15.5,5.2,14.8,2.7,13.5,1.6L13.5,1.6z M13.9,9c-0.4,3.2-2.8,3.5-3.2,3.6c-0.2,0.1-1.9,0.5-4.1,0.4c0,0-1.6,2-2.1,2.5
                        c-0.2,0.2-0.3,0.1-0.3-0.2c0-0.2,0-2.7,0-2.7c0,0,0,0,0,0c-3.2-0.9-3-4.2-3-5.9c0-1.7,0.4-3.2,1.3-4.1c1.7-1.6,5.3-1.3,5.3-1.3
                        c3,0,4.5,0.9,4.8,1.2C13.7,3.3,14.3,5.6,13.9,9L13.9,9z M9.6,6.4c0,0.3-0.4,0.3-0.4,0c0-0.7-0.4-1-1-1.1C7.9,5.4,7.9,5,8.2,5
                        C9,5,9.5,5.5,9.6,6.4z M10.2,6.8c0-1.3-0.8-2.4-2.4-2.5c-0.3,0-0.2-0.4,0-0.4c1.8,0.1,2.8,1.4,2.7,2.9C10.6,7.1,10.2,7.1,10.2,6.8
                        L10.2,6.8z M11.7,7.2c0,0.3-0.4,0.3-0.4,0c0-2.5-1.7-3.9-3.8-4c-0.3,0-0.3-0.4,0-0.4C9.8,2.9,11.6,4.5,11.7,7.2L11.7,7.2z
                        M11.3,10.3L11.3,10.3c-0.3,0.6-1,1.3-1.6,1l0,0c-0.7-0.2-2.2-1-3.2-1.8C6,9.2,5.5,8.7,5.2,8.2c-0.3-0.4-0.6-0.9-1-1.5
                        C3.5,5.6,3.4,5,3.4,5c-0.2-0.7,0.4-1.3,1-1.6h0C4.7,3.3,5,3.3,5.2,3.5c0,0,0.4,0.5,0.6,0.7C5.9,4.4,6.1,4.8,6.2,5
                        c0.2,0.3,0.1,0.7-0.1,0.8L5.7,6.1C5.5,6.3,5.6,6.5,5.6,6.5s0.6,2.1,2.6,2.6c0,0,0.3,0,0.4-0.2l0.3-0.4c0.1-0.2,0.5-0.3,0.8-0.1
                        c0.5,0.3,1,0.7,1.4,1C11.4,9.7,11.5,10,11.3,10.3z"/>
                      </svg>
                    </a>
                    <a href="viber://chat?number=+380939299292" className="Order__contactsItem_phoneLink Order__contactsItem_socialLink">
                      <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 18 15.7" width="28px" height="21px">
                        <path fill="#ffffff" d="M17.9,1.4l-2.7,13.3c-0.2,0.9-0.7,1.2-1.5,0.7l-4.1-3.2l-2,2c-0.2,0.2-0.4,0.4-0.8,0.4l0.3-4.4l7.7-7.2
                        c0.3-0.3-0.1-0.5-0.5-0.2L4.7,9.2L0.7,7.8c-0.9-0.3-0.9-0.9,0.2-1.4l16-6.4C17.5-0.2,18.2,0.3,17.9,1.4L17.9,1.4z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }
}
