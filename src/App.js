import './App.css';

import NavbarMain from './components/NavbarMain/NavbarMain'
import Home from './pages/Home/Home'
import Faq from './pages/Faq/Faq'
import Map from './pages/Map/Map'
import List from './pages/List/List'
import Footer from './components/Footer/Footer'

import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialMovies = {
  listName: 'Favorite',
  list: [
    'Rambo III', 'Hakerzy', 'Matrix'
  ]
}

const initialActors = {
  listName: 'Best',
  list: [
    'Tom Hanks', 'Julia Roberts', 'Angelina Jolie'
  ]
}

function movies(state = initialMovies, action){
  switch(action.type){
    case 'ADD_MOVIE':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_MOVIES':
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

function actors(state = initialActors, action){
  switch(action.type){
    case 'ADD_ACTOR':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_ACTORS':
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

const allReducers = combineReducers({movies, actors})

const store = createStore(allReducers, composeWithDevTools())
window.store = store

function App() {
  let allApp = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'str',
    minWidth: '100%',
    justifyContent: 'space-between'
  }

  return (
    <Container fluid className="px-0" style={allApp}>
      <Container fluid className="px-0" style={{minHeight: '100%'}}>
        <NavbarMain />
        <Container className="mt-5" style={{minHeight: '100%'}}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/map" component={Map} />
            <Route path="/list" component={List} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </Container>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
