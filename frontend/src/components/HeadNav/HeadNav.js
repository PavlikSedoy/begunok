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
        <div className="HeadNav__phone">Phone</div>
      </Container>
    </div>
  )
}
