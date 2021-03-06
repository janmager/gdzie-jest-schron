import './App.css';

import React, { useState, useEffect } from 'react'

import NavbarMain from './components/NavbarMain/NavbarMain'
import Home from './pages/Home/Home'
import Faq from './pages/Faq/Faq'
import Map from './pages/Map/Map'
import List from './pages/List/List'
import Footer from './components/Footer/Footer'
import Shelter from './pages/List/Shelter/Shelter';
import Search from './pages/List/Search/Search'

import shelters from './assets/shelters.json'

import { Container } from 'react-bootstrap'
import { Route, Switch, withRouter } from 'react-router-dom'

import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-51521950-21';
ReactGA.initialize(TRACKING_ID);

function App() {
  const [ sheltersDB, setSheltersDB ] = useState(shelters)
  const [ filterPeopleCountFrom, setFilterPeopleCountFrom ] = useState(null)
  const [ filterPeopleCountTo, setFilterPeopleCountTo ] = useState(null)

  useEffect(() => {
    let tempShelters = []
    shelters.map(shelter => {
      if(
        (shelter.people_count >= filterPeopleCountFrom && shelter.people_count <= filterPeopleCountTo)
        ||
        (shelter.people_count >= filterPeopleCountFrom && null == filterPeopleCountTo)
        ||
        (null == filterPeopleCountFrom && shelter.people_count <= filterPeopleCountTo)
      ){
        tempShelters.push(shelter)
      }
    })
    setSheltersDB(tempShelters)
  }, [filterPeopleCountFrom, filterPeopleCountTo])

  let windowLocation = window.location.pathname;
  ReactGA.pageview(windowLocation + window.location.search);

  let allApp = {
    minHeight: '100vh',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'str',
    minWidth: '100%',
    justifyContent: 'space-between'
  }

  return (
    <Container fluid className="px-0" style={allApp}>
      <Container fluid className="px-0" style={{height: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <NavbarMain />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/mapa">
              <Map 
                shelters={sheltersDB} 
                setFilterPeopleCountFrom={setFilterPeopleCountFrom}
                setFilterPeopleCountTo={setFilterPeopleCountTo}
                filterPeopleCountFrom={filterPeopleCountFrom}
                filterPeopleCountTo={filterPeopleCountTo}
              />
            </Route>
            <Route path="/lista">
              <List 
                shelters={sheltersDB} 
                setFilterPeopleCountFrom={setFilterPeopleCountFrom}
                setFilterPeopleCountTo={setFilterPeopleCountTo}
                filterPeopleCountFrom={filterPeopleCountFrom}
                filterPeopleCountTo={filterPeopleCountTo}
              />
            </Route>
            <Route path="/faq" component={Faq} />
            <Route path="/schron/:id" component={Shelter} />
            <Route path="/szukaj/:searched" component={Search} />
          </Switch>
      </Container>
      <Footer />
    </Container>
  );
}

export default withRouter(App);
