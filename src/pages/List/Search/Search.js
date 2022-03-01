import React, { useEffect, useState } from 'react'
import shelters from '../../../assets/shelters.json'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'

export default function Search() {
    const { searched } = useParams()
    const [ results, setResults] = useState([])

    useEffect(() => {
        let tempResults = []
        shelters.map(shelter => {
            if((shelter.address.toLowerCase()).includes(searched.toLowerCase()) || (shelter.desc.toLowerCase()).includes(searched.toLowerCase())){
                tempResults.push(shelter)
            }
        })
        setResults(tempResults)
    }, [searched])

    return (
        <Container>
            <Row>
                <Col xs={12} className="mt-3 mb-3">
                    Wyniki wyszukiwania dla: <b>{searched}</b><br />
                    Liczba wyników: <b>{results.length}</b>
                </Col>
                {
                    results.map(shelter => {
                        return(
                            <Col xs={12} md={6}  className="mb-3">
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
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
