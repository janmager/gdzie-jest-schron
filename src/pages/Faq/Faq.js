import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Faq() {
  return (
    <Container>
      <Row>
        <Col xs={12} className="py-3">
          <h3>FAQ - Najczęściej zadawanie pytania</h3>
        </Col>
        <Col xs={12}>
          <ol>
            <li>Pytanie pierwsze</li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et risus in arcu aliquet rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut venenatis eros, id tempor sapien. Sed sed magna mattis, ornare ante a, accumsan mauris. Nulla sollicitudin risus est, vitae lacinia tortor suscipit ac. Aliquam vulputate velit vel turpis condimentum lobortis.</p>
            <li>Pytanie drugie</li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et risus in arcu aliquet rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut venenatis eros, id tempor sapien. Sed sed magna mattis, ornare ante a, accumsan mauris. Nulla sollicitudin risus est, vitae lacinia tortor suscipit ac. Aliquam vulputate velit vel turpis condimentum lobortis.</p>
            <li>Pytanie trzecie</li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et risus in arcu aliquet rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut venenatis eros, id tempor sapien. Sed sed magna mattis, ornare ante a, accumsan mauris. Nulla sollicitudin risus est, vitae lacinia tortor suscipit ac. Aliquam vulputate velit vel turpis condimentum lobortis.</p>
            <li>Pytanie czwarte</li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et risus in arcu aliquet rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut venenatis eros, id tempor sapien. Sed sed magna mattis, ornare ante a, accumsan mauris. Nulla sollicitudin risus est, vitae lacinia tortor suscipit ac. Aliquam vulputate velit vel turpis condimentum lobortis.</p>
          </ol>
        </Col>
      </Row>
    </Container>
  )
}
