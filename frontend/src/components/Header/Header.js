import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Container from '../Container/Container'
import HeadNav from '../HeadNav/HeadNav'
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
          <div className="Header__content">
            <h1 className="Header__title">Запчасти на японские авто от лучших поставщиков</h1>
            <div className="Header__description">
              <p><span>Begunok</span> сэкономит Ваше время и деньги. Скажите нам что у <br/> Вас за авто и мы сами найдем лучшие варианты запчастей.</p>
            </div>
            <div className="Header__btnsWr">
              <div className="Header__requestBtnWr RequestBtn__wr">
                <div className="RequestBtn__shadow"></div>
                <div className="RequestBtn__insideWr">
                  <button className="RequestBtn">Оставить заявку</button>
                </div>
              </div>
              <div className="Header__present PresentBtn__wr">
                <button className="PresentBtn">
                  <div className="PresentBtn__insideWr">
                    <div className="PresentBtn__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 22 21">
                        <path fill="#ffffff" d="M21.2,4.2h-3.5c0.2-0.4,0.3-0.9,0.3-1.3c0-1.6-1.3-2.8-2.9-2.8C13,0,11.7,1.6,11,3c-0.7-1.3-2-3-4.2-3 C5.2,0,3.9,1.3,3.9,2.8c0,0.5,0.1,0.9,0.3,1.3H0.8C0.3,4.2,0,4.5,0,4.9v4.9c0,0.4,0.3,0.8,0.8,0.8h0.7v9.7c0,0.4,0.3,0.8,0.8,0.8 h17.7c0.4,0,0.8-0.3,0.8-0.8v-9.7h0.6c0.4,0,0.8-0.3 0.8-0.8V4.9C22,4.5,21.7,4.2,21.2,4.2z M20.5,9.1h-8.7V5.7h8.7V9.1z M15.2,1.5 c0.7,0,1.4,0.6,1.4,1.3c0,0.8-0.6,1.3-1.3,1.3h-3.2C12.6,3.1,13.5,1.5,15.2,1.5z M5.5,2.8c0-0.7,0.6-1.3,1.4-1.3 c1.7,0,2.6,1.6,3.1,2.7H6.8C6,4.2,5.5,3.6,5.5,2.8z M1.5,5.7h8.7v3.4H1.5V5.7z M2.9,10.6h7.3v8.9H2.9V10.6z M19.1,19.5h-7.3v-8.9 h7.3V19.5z"/>
                      </svg>
                    </div>
                    <span>Выиграть скидку</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="Header__carBg"></div>
        </Container>
      </div>
    )
  }
}
