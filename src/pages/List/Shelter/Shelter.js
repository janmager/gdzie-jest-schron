import React from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import shelters from '../../../assets/shelters.json'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import style from './Shelter.module.css'
import { Link } from 'react-router-dom'


import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function Shelter() {
    const { id } = useParams()

    return (
        <Container className="mt-3">
            <Row>
                <Col xs={12} className={style.breadcrumbs}>
                    <Link to="/mapa">Mapa</Link> / Schron nr {id}
                </Col>
                <Col xs={12} md={6} className="mt-3">
                    <Card className={style.shelterInfoBox}>
                        <Card.Header className="bg-light">
                            Schron nr.{shelters[id-1].id}
                        </Card.Header>
                        <Card.Body className={style.shelterBody}>
                            <span>dzielnica: <span>{shelters[id-1].district}</span></span>
                            <span>adres: <span>{shelters[id-1].address}</span></span>
                            <span>dodatkowe informacje: <span>{shelters[id-1].desc}</span></span>
                            <span>powierzchnia: <span>{shelters[id-1].area}m<sup>2</sup></span></span>
                            <span>miejsca dla osób: <span>{shelters[id-1].people_count}</span></span>
                            <span>instalacja wodna: <span>{shelters[id-1].water_installation}</span></span>
                            <span>zbiornik wodny: <span>{shelters[id-1].water_tank_capacity > 0 ? `tak, o pojemności ${shelters[id-1].water_tank_capacity}L` : 'nie'}</span></span>
                            <span>instalacje energetyczna: <span>{shelters[id-1].energy_installation}</span></span>
                            <span>instalacja C.O.: <span>{shelters[id-1].co_installation}</span></span>
                            <span>współrzędne geograficzne: <span>{shelters[id-1].lat}, {shelters[id-1].lng}</span></span>
                        </Card.Body>
                    </Card>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${shelters[id-1].lat},${shelters[id-1].lng}`}><Button variant="dark" className="mt-3 w-100">Uruchom nawigację</Button></a>
                </Col>
                <Col xs={12} md={6} className="mt-3">
                    <Card>
                        <Card.Header className="bg-light">
                            Mapka poglądowa
                        </Card.Header>
                        <Card.Body>
                            <MapContainer zoomControl={false} center={[shelters[id-1].lat, shelters[id-1].lng]} zoom={16} style={{height: '100%', minHeight: '450px'}}>
                                <Marker key={shelters[id-1].id} position={[shelters[id-1].lat, shelters[id-1].lng]} />
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            </MapContainer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )
}
