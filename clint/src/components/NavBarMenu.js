import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const NavBarMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Products</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="show-products-nav" href="/">Products</Nav.Link>
                            <Nav.Link className="add-product-nav" href="/addProduct">add Products</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBarMenu;