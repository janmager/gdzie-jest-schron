import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-5">
          <p>Interaktywna mapa schronów na terenie Poznania.<br />
          Źródło danych: <a href="http://sip.geopoz.pl/sip/wzkb/bezpieczenstwo">www.sip.geopoz.pl</a></p>
        </Col>
      </Row>
    </Container>
  )
}
