import React from 'react'
// import PropTypes from 'prop-types'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import DefaultBtn from '../DefaultBtn/DefaultBtn'
import './About.scss'

// Car brand logos
import toyotaLogo from '../../images/car-brand-logos/toyota.png'
import lexusLogo from '../../images/car-brand-logos/lexus.png'
import subaruLogo from '../../images/car-brand-logos/subaru.png'
import nissanLogo from '../../images/car-brand-logos/nissan.png'
import mazdaLogo from '../../images/car-brand-logos/mazda.png'
import acuraLogo from '../../images/car-brand-logos/acura.png'
import suzukiLogo from '../../images/car-brand-logos/suzuki.png'
import infinitiLogo from '../../images/car-brand-logos/infiniti.png'
import mitsubishiLogo from '../../images/car-brand-logos/mitsubishi.png'
import isuzuLogo from '../../images/car-brand-logos/isuzu.png'

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
    
      <div className="About__carBrands">
        <Container>
          <div className="About__carBrandsWr">
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={toyotaLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={lexusLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={subaruLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={nissanLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={mazdaLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={acuraLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={suzukiLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={infinitiLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={mitsubishiLogo} alt="Acura"/>
            </div>
            {/* End item */}
            <div className="About__carBrandItem">
              <img className="About__carBrandImage" src={isuzuLogo} alt="Acura"/>
            </div>
            {/* End item */}
          </div>

          <div className="About__requestBtn">
            <DefaultBtn>
              Найти деталь
            </DefaultBtn>
          </div>
        </Container>
      </div>
    </section>
  )
}

// About.propTypes = {

// }

export default About

