import React from 'react'

import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ShelterListItem({shelter}) {
  return (
    <Card>
        <Card.Header>
        Schron nr. {shelter.id}
        </Card.Header>
        <Card.Body>
        {shelter.address}<br />
        pojemność: {shelter.people_count} osób<br />
        <span style={{fontSize: '14px', opacity: '0.75', lineHeight: '60%'}}>opis: {shelter.desc}</span>
        </Card.Body>
        <Card.Footer>
        <Link to={`/schron/${shelter.id}`}>
            <Button className="btn btn-sm btn-secondary w-100">Więcej informacji</Button>
        </Link>
        </Card.Footer>
    </Card>
  )
}
