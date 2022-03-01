import './App.css';

import NavbarMain from './components/NavbarMain/NavbarMain'
import Home from './pages/Home/Home'
import Faq from './pages/Faq/Faq'
import Map from './pages/Map/Map'
import List from './pages/List/List'
import Footer from './components/Footer/Footer'
import Shelter from './pages/List/Shelter/Shelter';

import { Container } from 'react-bootstrap'
import { Route, Switch, withRouter } from 'react-router-dom'

import ReactGA from 'react-ga';

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_CODE;
ReactGA.initialize(TRACKING_ID);

function App() {
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
            <Route path="/mapa" component={Map} />
            <Route path="/lista" component={List} />
            <Route path="/faq" component={Faq} />
            <Route path="/schron/:id" component={Shelter} />
          </Switch>
      </Container>
      <Footer />
    </Container>
  );
}

export default withRouter(App);
