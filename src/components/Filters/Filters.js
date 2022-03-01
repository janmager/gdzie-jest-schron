import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Filters({setFilterPeopleCountFrom, setFilterPeopleCountTo, filterPeopleCountFrom, filterPeopleCountTo}) {

    useEffect(() => {
        console.log(filterPeopleCountFrom)
        console.log(filterPeopleCountTo)
    }, [])

    function handleInputPeopleCountFrom(e){
        if(e.target.value==="") setFilterPeopleCountFrom(null)
        else setFilterPeopleCountFrom(e.target.value)
    }

    function handleInputPeopleCountTo(e){
        if(e.target.value==="") setFilterPeopleCountTo(null)
        else setFilterPeopleCountTo(e.target.value)    
    }

    return (
        <Col xs={12} className="mt-4">
            <Row>
                <Col xs={12} md={6} lg={3} className="mb-4">
                    <input onChange={(e) => handleInputPeopleCountFrom(e)} type="number" placeholder="miejsce od" value={filterPeopleCountFrom && filterPeopleCountFrom} />
                </Col>
                <Col xs={12} md={6} lg={3} className="mb-4">
                    <input onChange={(e) => handleInputPeopleCountTo(e)} type="number" placeholder="miejsce do" value={filterPeopleCountTo && filterPeopleCountTo} />
                </Col>
                <Col xs={12} md={6} lg={3} className="mb-4">blok 3</Col>
                <Col xs={12} md={6} lg={3} className="mb-4">blok 4</Col>
            </Row>
        </Col>
    )
}
