import React from 'react'
// import PropTypes from 'prop-types'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import './About.scss'

function About(props) {
  return (
    <section className="About">
      <Container>
        <SectionTitle
          color={1}
          sectionNumber='01'
        >
          О нас
        </SectionTitle>
      </Container>
      <div className="About__content">
        <Container>
          <div className="About__titleAndDesc">
            <h2 className="About__contentTitle">Компания <span>Begunok</span> - лучший друг 
твоего авто</h2>
            <div className="About__description">
              <p>Интернет-магазин BI-BIP.RU – это запчасти для европейских грузовиков и автобусов MAN, Scania (Сканиа), Volvo (Вольво), Mercedes-Benz (Мерседес), RENAULT (Рено), DAF (Даф), Iveco, Neoplan; а также - для прицепов европейского производства BPW, ROR, SAF.</p>
              <p>Наш 10-летний опыт работы позволяет предложить Вам широкий ассортимент оригинальных и лицензионных запасных частей для грузовых автомобилей, автобусов, прицепов и полуприцепов.</p>
              <p>Наши специалисты всегда помогут подобрать оптимальный вариант именно для Вас!
Доверие наших клиентов и партнеров – вот показатель нашей эффективной работы!</p>
            </div>
          </div>
        </Container>
        <div className="About__videoWr">
          <div class="playBtn About__playBtn">
            <button class="playBtn__insideWr">
              <div class="playBtn__btn"></div>
              <div class="playBtn__text">Смотреть видео</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// About.propTypes = {

// }

export default About

