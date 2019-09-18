import React, { Component } from 'react'

// Components
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

// Styles
import './Faq.scss'

export default class Faq extends Component {

  hasClass = (element, cls) => {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  itemClickHandler = e => {
    e.preventDefault()

    const el = e.target.parentNode.parentNode
    const offset = e.target.nextSibling.offsetHeight
    const offsetInt = parseInt(offset)
    
    el.classList.toggle('active')


    if ( this.hasClass(el, 'active') ) {
      el.style.height = offsetInt + 75 + 'px'
      // console.log('active')
    } else {
      el.style.height = 75 + 'px'
      // console.log('no-active')
    }
  }

  render() {
    return (
      <section className="Faq">
        <Container>
          <SectionTitle
            color={1}
            sectionNumber='07'
          >FAQ (Популярные вопросы)</SectionTitle>
          
          <div className="Faq__items">
            <div className="Faq__item">
              <div className="Faq__item_content">
                <a
                  href="#"
                  className="Faq__item_contentTitle"
                  onClick={this.itemClickHandler}
                >
                  Какой у вас график работы?
                </a>
                <div className="Faq__item_contentText">
                  <p>Конечно, наш магазин расположен по адресу г. Киев, ул. Скляренка, 5А. Ждем вас в гости.</p>
                </div>
              </div>
            </div>
            {/* End Item */}
            <div className="Faq__item">
              <div className="Faq__item_content">
                <a
                  href="#"
                  className="Faq__item_contentTitle"
                  onClick={this.itemClickHandler}
                >
                  Можно ли приехать к вам в магазин?
                </a>
                <div className="Faq__item_contentText">
                  <p>Конечно, наш магазин расположен по адресу г. Киев, ул. Скляренка, 5А. Ждем вас в гости.</p>
                </div>
              </div>
            </div>
            {/* End Item */}
            <div className="Faq__item">
              <div className="Faq__item_content">
                <a
                  href="#"
                  className="Faq__item_contentTitle"
                  onClick={this.itemClickHandler}
                >
                  Какие есть способы оплаты и доставки?
                </a>
                <div className="Faq__item_contentText">
                  <p>Конечно, наш магазин расположен по адресу г. Киев, ул. Скляренка, 5А. Ждем вас в гости.</p>
                </div>
              </div>
            </div>
            {/* End Item */}
            <div className="Faq__item">
              <div className="Faq__item_content">
                <a
                  href="#"
                  className="Faq__item_contentTitle"
                  onClick={this.itemClickHandler}
                >
                  Какая есть гарантия на запчасти?
                </a>
                <div className="Faq__item_contentText">
                  <p>Конечно, наш магазин расположен по адресу г. Киев, ул. Скляренка, 5А. Ждем вас в гости.</p>
                </div>
              </div>
            </div>
            {/* End Item */}
            <div className="Faq__item">
              <div className="Faq__item_content">
                <a
                  href="#"
                  className="Faq__item_contentTitle"
                  onClick={this.itemClickHandler}
                >
                  Какой у вас график работы
                </a>
                <div className="Faq__item_contentText">
                  <p>Конечно, наш магазин расположен по адресу г. Киев, ул. Скляренка, 5А. Ждем вас в гости.</p>
                </div>
              </div>
            </div>
            {/* End Item */}
            <div className="Faq__item">
              <div className="Faq__item_content">
                <a
                  href="#"
                  className="Faq__item_contentTitle"
                  onClick={this.itemClickHandler}
                >
                  Можно ли приехать к вам в магазин?
                </a>
                <div className="Faq__item_contentText">
                  <p>Конечно, наш магазин расположен по адресу г. Киев, ул. Скляренка, 5А. Ждем вас в гости.</p>
                </div>
              </div>
            </div>
            {/* End Item */}
            <div className="Faq__item">
              <div className="Faq__item_content">
                <a
                  href="#"
                  className="Faq__item_contentTitle"
                  onClick={this.itemClickHandler}
                >
                  Какие есть способы оплаты и доставки?
                </a>
                <div className="Faq__item_contentText">
                  <p>Конечно, наш магазин расположен по адресу г. Киев, ул. Скляренка, 5А. Ждем вас в гости.</p>
                </div>
              </div>
            </div>
            {/* End Item */}
            <div className="Faq__item">
              <div className="Faq__item_content">
                <a
                  href="#"
                  className="Faq__item_contentTitle"
                  onClick={this.itemClickHandler}
                >
                  Какия есть гарантия на запчасти?
                </a>
                <div className="Faq__item_contentText">
                  <p>Конечно, наш магазин расположен по адресу г. Киев, ул. Скляренка, 5А. Ждем вас в гости.</p>
                </div>
              </div>
            </div>
            {/* End Item */}
          </div>
        </Container>
      </section>
    )
  }
}
