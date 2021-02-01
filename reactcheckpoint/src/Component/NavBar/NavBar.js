import React from 'react';

import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavBar = () => {


   return (

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Waywa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#link">Live</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Book</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Programs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">References</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
    )
}


export default MyNavBar;