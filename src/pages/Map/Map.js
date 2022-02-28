import React, {useState, useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import style from './Map.module.css'

import shelters from '../../assets/shelters.json'

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function Map() {
    const position = [52.4065883, 16.9285973]

    return (
        <Container style={{height: '100%', minHeight: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xs={12} className={style.mapWrapper}>
                    <MapContainer center={position} zoom={13} className={style.map}>
                        {
                            shelters.map(shelter => {
                                if(shelter.lat != 0 && shelter.lng != 0){
                                    return(
                                        <Marker key={shelter.id} position={[shelter.lat, shelter.lng]}>
                                            <Popup>
                                                {shelter.address}
                                                <hr />
                                                dodatkowe info: <span style={{opacity: '0.6'}}>{shelter.desc}</span>
                                                <hr />
                                                pojemność: <b>{shelter.people_count}</b> osób
                                                <hr />
                                                <Link to={{pathname: `/schron/${shelter.id}`}}>Zobacz więcej informacji</Link>
                                                <hr />
                                                <a href={`https://www.google.com/maps/search/?api=1&query=${shelter.lat},${shelter.lng}`}>Ustaw nawigację do miejsca</a>
                                            </Popup>
                                        </Marker>
                                    )
                                }
                            })
                        }
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                    <span className="mt-3">Liczba schronów w bazie danych: {shelters.length}</span>
                </Col>
            </Row>
        </Container>
    )
}
