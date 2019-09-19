// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import DefaultBtn from '../DefaultBtn/DefaultBtn'

// Styles
import './Contacts.scss'

function Contacts(props) {
    return (
        <section className="Contacts dark-section">
            <div className="Contacts__bg"></div>
            <Container>
                <SectionTitle
                    color={2}
                    sectionNumber='08'
                >Контакты</SectionTitle>

                <div className="Contacts__content">
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
                                <a href="mailto:begunokinfo@begunok.in.ua" className="Order__contactsItem_phoneLink Order__contactsItem_emailLink">19, бульвар Перова, Киев, 02000</a>
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
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 18 15.7" width="28px" height="21px">
                                <path fill="#ffffff" d="M17.9,1.4l-2.7,13.3c-0.2,0.9-0.7,1.2-1.5,0.7l-4.1-3.2l-2,2c-0.2,0.2-0.4,0.4-0.8,0.4l0.3-4.4l7.7-7.2
                                c0.3-0.3-0.1-0.5-0.5-0.2L4.7,9.2L0.7,7.8c-0.9-0.3-0.9-0.9,0.2-1.4l16-6.4C17.5-0.2,18.2,0.3,17.9,1.4L17.9,1.4z"/>
                            </svg>
                            </a>
                        </div>
                        </div>
                        
                        <div className="Contacts__btn">
                            <DefaultBtn
                                padding={40}
                            >
                                Оставить заявку
                            </DefaultBtn>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="Contacts__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.6801435897282!2d30.58898751573259!3d50.48429807948012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d03147316721%3A0xe008515e72be7966!2z0LHRg9C7LiDQn9C10YDQvtCy0LAsIDE5LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1568908123182!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" allowfullscreen=""></iframe>
            </div>
        </section>
    )
}

Contacts.propTypes = {

}

export default Contacts