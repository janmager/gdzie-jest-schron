import React, { useState } from 'react'

import { NavLink, useHistory } from 'react-router-dom'

import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap'

export default function NavbarMain() {
  const [ search, setSearch ] = useState()
  const history = useHistory()

  let nav = {
    minWidth: '100%'
  }

  function handleSubmit(e){
    e.preventDefault()
    history.push(`/szukaj/${search}`)
  }

  function handleChangeInput(e){
    setSearch(e.target.value)
  }

  return (
    <Navbar bg="dark" variant='dark' expand="lg" style={nav}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">ZnajdzSchron.pl</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={NavLink} to='/' exact>Start</Nav.Link>
            <Nav.Link as={NavLink} to='/mapa'>Mapa</Nav.Link>
            <Nav.Link as={NavLink} to='/lista'>Lista schronów</Nav.Link>
            <Nav.Link as={NavLink} to='/faq'>FAQ</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Wyszukaj schron..."
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleChangeInput(e)}
            />
            <Button variant="outline-secondary">Szukaj</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
