// Libs
import React from 'react'
import PropTypes from 'prop-types'
// Components
import SectionTitle from '../SectionTitle/SectionTitle'
import Container from '../Container/Container'

// Style
import './Why.scss'

// Icons
import itemIcon from '../../images/icons/why-block-icons/search-engine-white.svg'

function Why(props) {
  return (
    <section className="Why dark-section">
      <Container>
        <SectionTitle
          color={2}
          sectionNumber='02'
        >
          Почему Begunok
        </SectionTitle>
      </Container>
      <Container devClass="Why__contentContainer">
        <div className="Why__bgImg"></div>
        <div className="Why__content">
          <article className="Why__item">
            <img src={itemIcon} alt="Alt for item icon" className="Why__itemIcon"/>
            <h3 className="Why__itemTitle">Простой поиск деталей</h3>
            <div className="Why__itemDesc">
              <p>Хватит искать нужную вам запчасть из бесконеных списков интернет магазинов с большим разбросом цен.</p>
              <p>Просто заполните заявку и мы подберем лучшие варианты запчастей по оптимальной цене.</p>
            </div>
          </article>
          {/* End Item */}

          <article className="Why__item">
            <img src={itemIcon} alt="Alt for item icon" className="Why__itemIcon"/>
            <h3 className="Why__itemTitle">Заботливые менеджеры</h3>
            <div className="Why__itemDesc">
              <p>Хватит искать нужную вам запчасть из бесконеных списков интернет магазинов с большим разбросом цен.</p>
              <p>Просто заполните заявку и мы подберем лучшие варианты запчастей по оптимальной цене.</p>
            </div>
          </article>
          {/* End Item */}

          <article className="Why__item">
            <img src={itemIcon} alt="Alt for item icon" className="Why__itemIcon"/>
            <h3 className="Why__itemTitle">Простой поиск деталей</h3>
            <div className="Why__itemDesc">
              <p>Хватит искать нужную вам запчасть из бесконеных списков интернет магазинов с большим разбросом цен.</p>
              <p>Просто заполните заявку и мы подберем лучшие варианты запчастей по оптимальной цене.</p>
            </div>
          </article>
          {/* End Item */}

          <article className="Why__item">
            <img src={itemIcon} alt="Alt for item icon" className="Why__itemIcon"/>
            <h3 className="Why__itemTitle">Заботливые менеджеры</h3>
            <div className="Why__itemDesc">
              <p>Хватит искать нужную вам запчасть из бесконеных списков интернет магазинов с большим разбросом цен.</p>
              <p>Просто заполните заявку и мы подберем лучшие варианты запчастей по оптимальной цене.</p>
            </div>
          </article>
          {/* End Item */}
        </div>
      </Container>
    </section>
  )
}

Why.propTypes = {

}

export default Why

