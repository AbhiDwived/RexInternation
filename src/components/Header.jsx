import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



const Header = () => {
  return (
    <>
    <Navbar style={{backgroundColor:"#2e8b57"}} expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer className="text-warning" to="/">
            <Navbar.Brand>REX</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
            <LinkContainer to="/">
                <Nav.Link className='text-white'>
                  <i className="fas fa-home"></i>
                  &nbsp; Home
                </Nav.Link>
              </LinkContainer>
            <LinkContainer to="/">
                <Nav.Link className='text-white'>
                  &nbsp; About
                </Nav.Link>
              </LinkContainer>
      <LinkContainer to="/product" >
        <NavDropdown title="Shop By Product" id="basic-nav-dropdown" className='mx-0'>
          <LinkContainer to="/">
            <NavDropdown.Item>
              <i className="fas fa-arrow"></i>
              &nbsp; Poop And Pee Odour Eliminator
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/">
            <NavDropdown.Item>
              <i className="fas fa-arrow"></i>
              &nbsp; Herbal Pet Deodorizer
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </LinkContainer>
      <LinkContainer to="/">
        <Nav.Link className="text-white">
          Professional Range
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/product" >
        <NavDropdown title="Our Enzyme" id="basic-nav-dropdown" className="mx-0">
          <LinkContainer to="/">
            <NavDropdown.Item>
              <i className="fas fa-arrow"></i>
              &nbsp; Category 1
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/">
            <NavDropdown.Item>
              <i className="fas fa-arrow"></i>
              &nbsp; Category 2
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </LinkContainer>
      <LinkContainer to="/">
        <Nav.Link className="text-white">
          Contact Us
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/">
        <Nav.Link className="text-white">
          Gallery
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/">
        <Nav.Link className="text-white">
          FAQ
        </Nav.Link>
      </LinkContainer>
    </Nav>

            <Nav className="ms-auto">
            <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  &nbsp; cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    &nbsp; singin
                  </Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header