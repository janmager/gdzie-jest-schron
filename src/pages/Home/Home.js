import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-5">
          <p>Interaktywna mapa schronów na terenie Poznania.</p>
        </Col>
      </Row>
    </Container>
  )
}
