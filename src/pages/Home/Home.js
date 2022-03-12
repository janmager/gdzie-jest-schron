import React, { useState, useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Filters from '../../components/Filters/Filters'

export default function Home() {
  const [userLat, setUserLat] = useState(null)
  const [userLng, setUserLng] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      setUserLat(position.coords.latitude)
      setUserLng(position.coords.longitude)
    })
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} className="mt-5">
          <h5>Twoje położenie: {userLat}, {userLng}</h5>
        </Col>
        <Col xs={12} sm={6} className="mt-5">
          {userLat && userLng && <MapContainer center={[userLat, userLng]} zoom={15} style={{height: '500px'}}>
            <Marker position={[userLat, userLng]}>
              <Popup>Tutaj jesteś</Popup>
            </Marker>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>}
        </Col>
      </Row>
    </Container>
  )
}
