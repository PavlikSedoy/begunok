import React from 'react'
import Container from '../Container/Container'
import './HeadNav.scss'

export default function HeadNav() {
  return (
    <div className="HeadNav">
      <Container devClass="HeadNav__container">
        <div className="HeadNav__logo">Logo</div>
        <nav className="HeadNav__nav Nav">
          <ul className="Nav__list">
            <li className="Nav__item"><a href="#about" className="Nav__item-link">О нас</a></li>
            <li className="Nav__item"><a href="#why" className="Nav__item-link">Почему мы</a></li>
            <li className="Nav__item"><a href="#how-we-works" className="Nav__item-link">Как мы работаем</a></li>
            <li className="Nav__item"><a href="#review" className="Nav__item-link">Отзывы</a></li>
            <li className="Nav__item"><a href="#best-price" className="Nav__item-link">Лучшие предложения</a></li>
            <li className="Nav__item"><a href="#order" className="Nav__item-link">Заказ</a></li>
            <li className="Nav__item"><a href="#faq" className="Nav__item-link">FAQ</a></li>
            <li className="Nav__item"><a href="#contacts" className="Nav__item-link">Контакты</a></li>
          </ul>
        </nav>
        <div className="HeadNav__phone">
          <div className="PhoneChanger">
            <div className="PhoneChanger__operator">
              <div className="PhoneChanger__operatorIcon">
                  <svg x="0px" y="0px" viewBox="0 0 16 16">
                    <path fill="#FFFFFF" d="M0,8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8c0,4.4-3.6,8-8,8c-0.9,0-1.7-0.1-2.5-0.4c0.6-3.3,2.7-6,5.4-7.1 c0.3,0.4,0.8,0.6,1.3,0.6c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8C7,8.4,4.1,10.8,2.7,14
	c-0.5-0.4-0.9-0.9-1.2-1.4C1.5,9.5,3,6.8,5.3,5.3c0.3,0.4,0.8,0.6,1.3,0.6c1,0,1.8-0.8,1.8-1.8S7.6,2.3,6.7,2.3
	c-1,0-1.8,0.8-1.8,1.8c0,0.1,0,0.1,0,0.2C2.8,5,1,6.4,0,8.3C0,8.2,0,8.1,0,8z"/>
                  </svg>
              </div>
              <div className="PhoneChanger__operator_arrowWr">
                <div className="PhoneChanger__operator_arrow"></div>
              </div>
              <ul className="PhoneChanger__operatorsList">
                <li className="PhoneChanger__operatorItem">
                  <svg x="0px" y="0px" viewBox="0 0 16 16">
                    <path fill="#FFFFFF" d="M0,8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8c0,4.4-3.6,8-8,8c-0.9,0-1.7-0.1-2.5-0.4c0.6-3.3,2.7-6,5.4-7.1 c0.3,0.4,0.8,0.6,1.3,0.6c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8C7,8.4,4.1,10.8,2.7,14
	c-0.5-0.4-0.9-0.9-1.2-1.4C1.5,9.5,3,6.8,5.3,5.3c0.3,0.4,0.8,0.6,1.3,0.6c1,0,1.8-0.8,1.8-1.8S7.6,2.3,6.7,2.3
	c-1,0-1.8,0.8-1.8,1.8c0,0.1,0,0.1,0,0.2C2.8,5,1,6.4,0,8.3C0,8.2,0,8.1,0,8z"/>
                  </svg>
                </li>
                <li className="PhoneChanger__operatorItem">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16.7 16">
                    <path fill="#ffffff" d="M9.5,1.1C9.5,0.5,9,0,8.4,0C7.8,0,7.3,0.5,7.3,1.1v4.1c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1V1.1z M6,8 c0.2-0.6-0.1-1.2-0.7-1.4L1.4,5.3C0.9,5.1,0.2,5.5,0.1,6c-0.2,0.6,0.1,1.2,0.7,1.4l3.9,1.3C5.2,8.9,5.8,8.6,6,8z M6.9,10.7 c-0.5-0.4-1.2-0.2-1.5,0.2L3,14.3c-0.4,0.5-0.2,1.2,0.2,1.5c0.5,0.4,1.2,0.2,1.5-0.2l2.4-3.3C7.5,11.8,7.4,11.1,6.9,10.7z M11.3,11 c-0.4-0.5-1-0.6-1.5-0.2c-0.5,0.4-0.6,1-0.2,1.5l2.4,3.3c0.4,0.5,1,0.6,1.5,0.2c0.5-0.4,0.6-1,0.2-1.5L11.3,11z M16.7,6 c-0.2-0.6-0.8-0.9-1.4-0.7l-3.9,1.3c-0.6,0.2-0.9,0.8-0.7,1.4c0.2,0.6,0.8,0.9,1.4,0.7L16,7.4C16.5,7.2,16.8,6.6,16.7,6z"/>
                  </svg>
                </li>
              </ul>
            </div>
            <a href="tel:+380939299292" className="PhoneChanger__phone">+38 (093) 929 92 92</a>
          </div>
        </div>
        <div className="HeadNav__callback">
          <button className="HeadNav__callbackBtn">
            <div className="HeadNav__callbackIcon">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13.3 13.2">
                <path fill="#fff" d="M11.6,7.3c-0.1,0-0.3,0-0.4-0.1c-0.3-0.1-0.6-0.2-0.9-0.3c-0.3-0.1-0.6-0.1-1,0C9.1,7.1,8.8,7.3,8.7,7.6 L8.5,7.9C7.9,7.6,7.3,7.1,6.7,6.6c-0.5-0.5-1-1.1-1.3-1.8l0.3-0.2C6,4.5,6.2,4.2,6.3,3.9c0.1-0.3,0.1-0.6,0-1 C6.3,2.7,6.2,2.4,6.1,2.1C6.1,2,6,1.8,6,1.7C5.9,1.2,5.7,0.8,5.3,0.5C5,0.2,4.5,0,4,0H2C1.7,0,1.4,0.1,1.2,0.2 C0.9,0.3,0.7,0.5,0.5,0.7C0.3,0.9,0.2,1.1,0.1,1.4C0,1.7,0,2,0,2.3c0.4,2.8,1.6,5.4,3.6,7.4c2,2,4.6,3.3,7.4,3.6h0.3 c0.5,0,1-0.2,1.3-0.5c0.2-0.2,0.4-0.4,0.5-0.7c0.1-0.3,0.2-0.5,0.2-0.8v-2c0-0.5-0.2-0.9-0.5-1.3C12.5,7.6,12.1,7.4,11.6,7.3z M12,11.3c0,0.1,0,0.2-0.1,0.3c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3,0c-2.5-0.3-4.8-1.5-6.6-3.2 C2.8,6.9,1.7,4.6,1.4,2.1c0-0.1,0-0.2,0-0.3c0-0.1,0.1-0.2,0.1-0.3c0.1-0.1,0.1-0.1,0.2-0.2c0.1,0,0.2-0.1,0.3-0.1h2 c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0.1,0.4,0.1,0.5c0.1,0.4,0.2,0.7,0.3,1L4.2,3.9C4.1,3.9,4,4,4,4 C3.9,4.1,3.9,4.2,3.9,4.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0.1,0.3c1,2.1,2.6,3.7,4.7,4.7c0.2,0.1,0.3,0.1,0.5,0 c0.1,0,0.2-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.2l0.4-0.9c0.3,0.1,0.7,0.2,1.1,0.3c0.2,0,0.4,0.1,0.5,0.1c0.2,0,0.3,0.1,0.4,0.2 C11.9,8.9,12,9.1,12,9.2L12,11.3z"/>
              </svg>
            </div>
            <span>Обратный звонок</span>
          </button>
        </div>
      </Container>
    </div>
  )
}
