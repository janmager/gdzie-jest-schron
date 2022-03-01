import React, { useState } from 'react'

import { NavLink, useHistory } from 'react-router-dom'

import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap'

export default function NavbarMain() {
  const [ search, setSearch ] = useState()
  const history = useHistory()
  const [expanded, setExpanded] = useState(false);

  let nav = {
    minWidth: '100%'
  }

  function handleSubmit(e){
    e.preventDefault()
    history.push(`/szukaj/${search}`)
    setExpanded(false)
  }

  function handleChangeInput(e){
    setSearch(e.target.value)
  }

  return (
    <Navbar bg="dark" variant='dark' expand="lg" style={nav} expanded={expanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>ZnajdzSchron.pl</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={NavLink} to='/' exact onClick={() => setExpanded(false)}>Start</Nav.Link>
            <Nav.Link as={NavLink} to='/mapa' onClick={() => setExpanded(false)}>Mapa</Nav.Link>
            <Nav.Link as={NavLink} to='/lista' onClick={() => setExpanded(false)}>Lista schronów</Nav.Link>
            <Nav.Link as={NavLink} to='/faq' onClick={() => setExpanded(false)}>FAQ</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Wyszukaj schron..."
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleChangeInput(e)}
            />
            <Button variant="outline-secondary" type="submit">Szukaj</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
