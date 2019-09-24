import React from 'react'

// Components
import Container from '../Container/Container'

// Styles
import './Footer.scss'

export default function Footer() {
    return (
        <footer className="Footer">
            <Container
                devClass="Footer__container"
            >
                <div className="Footer__logo">Logo</div>
                <div className="Footer__copyright">© 2019 Begunok | All rights reserved</div>
            </Container>
        </footer>
    )
}