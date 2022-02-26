import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet'

import style from './Map.module.css'

export default function Map() {
    const position = [51.505, -0.09]

    const bounds = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    return (
        <Row>
            <Col xs={12}>
            <MapContainer center={position} zoom={13} className={style.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            </Col>
        </Row>
    )
}
