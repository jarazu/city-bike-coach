import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './Header.css'

const Header = () => {
    return (
        <Container variant="nav-main-area">
            <Row>
                <Col sm={12} md={4}>
                <Link to="/home"><img src={logo} alt="logo" className="logo"/></Link></Col>
                <Col sm={12}  md={8} className="nav-menu mb-sm-5  mb-xs-5">
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/testimonials">Testimonials</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
