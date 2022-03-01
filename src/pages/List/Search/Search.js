import React, { useEffect, useState } from 'react'
import shelters from '../../../assets/shelters.json'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import ShelterListItem from '../../../components/ShelterListItem/ShelterListItem'

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
                {/* <Filters /> */}
                <Col xs={12} className="mt-3 mb-3">
                    Wyniki wyszukiwania dla: <b>{searched}</b><br />
                    Liczba wyników: <b>{results.length}</b>
                </Col>
                {
                    results.map(shelter => {
                        return(
                            <Col xs={12} md={6}  className="mb-3">
                                <ShelterListItem shelter={shelter} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
