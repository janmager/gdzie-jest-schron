import './App.css';

import NavbarMain from './components/NavbarMain/NavbarMain'
import Home from './pages/Home/Home'
import Faq from './pages/Faq/Faq'
import Map from './pages/Map/Map'

import { Container, Row } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Container fluid className="px-0">
      <NavbarMain />
      <Container className="mt-5">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/map" component={Map} exact />
          <Route path="/faq" component={Faq} />
        </Switch>
      </Container>
    </Container>
  );
}

export default App;
