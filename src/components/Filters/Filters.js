import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import style from './Filters.module.css'

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
                <Col xs={12} md={6} className={`mb-4 ${style.inputBox}`}>
                    <span>Miejsca od</span>
                    <input onChange={(e) => handleInputPeopleCountFrom(e)} type="number" placeholder="np. 150" value={filterPeopleCountFrom && filterPeopleCountFrom} />
                </Col>
                <Col xs={12} md={6} className={`mb-4 ${style.inputBox}`}>
                    <span>Miejsca do</span>
                    <input onChange={(e) => handleInputPeopleCountTo(e)} type="number" placeholder="np. 500" value={filterPeopleCountTo && filterPeopleCountTo} />
                </Col>
            </Row>
        </Col>
    )
}
