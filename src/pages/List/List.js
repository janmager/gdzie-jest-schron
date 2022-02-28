import React from 'react'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'
import shelters from '../../assets/shelters.json'

import { Link } from 'react-router-dom'

export default function List() {
  return (
    <Container>
      <Row>
          <Col xs={12} className="my-4">
              filtry wyszukiwania here soon
          </Col>
          {
            shelters.map(shelter => {
              return(
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
                  <Card>
                    <Card.Header>
                      Schron nr. {shelter.id}
                    </Card.Header>
                    <Card.Body>
                      {shelter.address}<br />
                      pojemność: {shelter.people_count} osób
                    </Card.Body>
                    <Card.Footer>
                      <Link to={`/schron/${shelter.id}`}>
                        <Button className="btn btn-sm btn-secondary w-100">Więcej informacji</Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
      </Row>
    </Container>
  )
}
