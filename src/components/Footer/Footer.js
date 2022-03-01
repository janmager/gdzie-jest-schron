import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import style from './Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    var footer = {
        backgroundColor: 'rgb(33,37,41)',
        padding: '10px',
        color: 'white',
        fontSize: '14px'
    }

    return (
        <Container fluid style={footer}>
            <Container>
                <Row>
                    <Col xs={12} sm={6} className={style.footerLeft}>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <span>
                            Źródło danych: <a href="http://sip.geopoz.pl/sip/wzkb/bezpieczenstwo">www.sip.geopoz.pl</a>
                        </span>  
                    </Col>
                    <Col xs={12} sm={6} className={style.footerRight}>2022 &copy; gdziejestschron.pl</Col>
                </Row>
            </Container>
        </Container>
  )
}
