import React from 'react'

import { NavLink } from 'react-router-dom'

import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap'

export default function NavbarMain() {
  let nav = {
    minWidth: '100%'
  }

  return (
    <Navbar bg="dark" variant='dark' expand="lg" style={nav}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">GdzieJestSchron.pl</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={NavLink} to='/' exact>Start</Nav.Link>
            <Nav.Link as={NavLink} to='/map' exact>Mapa</Nav.Link>
            <Nav.Link as={NavLink} to='/faq'>FAQ</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Wyszukaj schron..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Szukaj</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
