// Libs
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

// Styles
import './How.scss'

// Icon
import howItemIcon from '../../images/icons/why-block-icons/search-engine-black.svg'

// Car images
import blackCar from '../../images/How/toyota-black.png'
import whiteCar from '../../images/How/toyota-white.png'
import redCar from '../../images/How/toyota-red.png'

function How(props) {
  return (
    <section className="How">
      <Container>
        <SectionTitle
          color={1}
          sectionNumber='03'
        >
          Как работает Begunok
        </SectionTitle>

        <div className="How__content">
          <article className="How__item">
            <img src={howItemIcon} alt="How item icon" className="How__itemIcon"/>
            <h3 className="How__itemTitle">Заполняете простую 
форму заявки</h3>
            <div className="How__itemDesc">
              <p>Заполнение заявки для заказа займет у вас меньше минуты.</p>
            </div>
          </article>
          {/* End Item */}

          <article className="How__item">
            <img src={howItemIcon} alt="How item icon" className="How__itemIcon"/>
            <h3 className="How__itemTitle">С вами связывается 
наш менеджер</h3>
            <div className="How__itemDesc">
              <p>Наш менеджер предложит вам несколько лучших вариантов по вашему запросу.</p>
            </div>
          </article>
          {/* End Item */}

          <article className="How__item">
            <img src={howItemIcon} alt="How item icon" className="How__itemIcon"/>
            <h3 className="How__itemTitle">Выбираете способ 
оплаты и доставки</h3>
            <div className="How__itemDesc">
              <p>Если вас устроило предложение, утверждаете с менеджером удобный для вас способ оплаты и доставки.</p>
            </div>
          </article>
          {/* End Item */}

          <article className="How__item">
            <img src={howItemIcon} alt="How item icon" className="How__itemIcon"/>
            <h3 className="How__itemTitle">Радуетесь 
полученному заказу</h3>
            <div className="How__itemDesc">
              <p>Наш менеджер предложит вам несколько лучших вариантов по вашему запросу.</p>
            </div>
          </article>
          {/* End Item */}
        </div>
      </Container>

      {/* Three cars in bottom page side */}
      <div className="How__threeCars">
        <img src={blackCar} alt="Black car" className="How__blackCar How__car"/>
        <img src={whiteCar} alt="White car" className="How__whiteCar How__car"/>
        <img src={redCar} alt="Red car" className="How__redCar How__car"/>
      </div>
    </section>
  )
}

How.propTypes = {

}

export default How