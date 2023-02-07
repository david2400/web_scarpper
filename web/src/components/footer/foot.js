import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-light py-3">
    <Container>
      <Row>
        <Col xs={12} sm={3} className="mb-2 mb-sm-0">
          <h5>About Us</h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            magna id molestie eleifend, dolor est euismod sapien, sit amet
            aliquet justo elit a est.
          </p>
        </Col>
        <Col xs={12} sm={3} className="mb-2 mb-sm-0">
          <h5>Links</h5>
          <Nav className="flex-column">
            <NavItem>
              <Link href="#">Home</Link>
            </NavItem>
            <NavItem>
              <Link href="#">Services</Link>
            </NavItem>
            <NavItem>
              <Link href="#">About</Link>
            </NavItem>
            <NavItem>
              <Link href="#">Contact</Link>
            </NavItem>
          </Nav>
        </Col>
        <Col xs={12} sm={3} className="mb-2 mb-sm-0">
          <h5>Contact</h5>
          <p className="text-muted">
            123 Main Street <br />
            Anytown, USA 12345 <br />
            (123) 456-7890
          </p>
        </Col>
        <Col xs={12} sm={3} className="mb-2 mb-sm-0">
          <h5>Follow Us</h5>
          <Nav className="d-flex justify-content-between">
            <NavItem>
              <Link href="#">
                <i className="fab fa-facebook fa-2x"></i>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#">
                <i className="fab fa-twitter fa-2x"></i>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#">
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#">
                <i className="fab fa-youtube fa-2x"></i>
              </Link>
            </NavItem>
          </Nav>
        </Col>
      </Row>
      <Row className="py-3 border-top">
        <Col className="text-center text-muted">
          Copyright © Your Website 2023
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;
