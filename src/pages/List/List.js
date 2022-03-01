import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import ShelterListItem from '../../components/ShelterListItem/ShelterListItem'
import Filters from '../../components/Filters/Filters'

export default function List({shelters, setFilterPeopleCountFrom, setFilterPeopleCountTo, filterPeopleCountFrom, filterPeopleCountTo}) {
  return (
    <Container>
      <Row>
          <Filters
            setFilterPeopleCountFrom={setFilterPeopleCountFrom}
            setFilterPeopleCountTo={setFilterPeopleCountTo}
            filterPeopleCountFrom={filterPeopleCountFrom}
            filterPeopleCountTo={filterPeopleCountTo}
          />
          {
            shelters.map(shelter => {
                return(
                  <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
                    <ShelterListItem shelter={shelter} />
                  </Col>
                )
            })
          }
      </Row>
    </Container>
  )
}
