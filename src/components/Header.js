import React from "react";
import Logo from "../assets/Logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import shoppingCart from "../assets/shopping-cart.png";
import "../styles/Header.css";
import Button from "react-bootstrap/Button";
function Header(props) {
  console.log(props.cart);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="top-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#Shop">Shop</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
            </Nav>
            <Button className="cart-btn" variant="light">
              <img src={shoppingCart} />
              <span className="item-btn-text"> (1 Item)</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
