// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import SectionTitle from './SectionTitle/SectionTitle'

// Styles
import './Contacts.scss'

function Contacts(props) {
    return (
        <section className="Contacts dark-section">
            <SectionTitle
            color={2}
            sectionNumber='08'
          >Contacts</SectionTitle>
        </section>
    )
}

Contacts.propTypes = {

}

export default Contacts