import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'

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
        <Row>
            <Col xs={12}>
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
                Liczba schronów w bazie danych: {shelters.length}
            </Col>
        </Row>
    )
}
