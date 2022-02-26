import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import style from './Footer.module.css'

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
                        <span><Link to="/">Start</Link></span>
                        <span><Link to="/map">Mapa</Link></span>
                        <span><Link to="/faq">FAQ</Link></span>
                    </Col>
                    <Col xs={12} sm={6} className={style.footerRight}>2022 &copy; gdziejestschron.pl</Col>
                </Row>
            </Container>
        </Container>
  )
}
