import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" className="logo"/>
          <Link to="/home">Home</Link> &nbsp;
          <Link to="/services">Services</Link>  &nbsp;
          <Link to="/about">About</Link> &nbsp;
          <Link to="/testimonials">Testimonials</Link> &nbsp;
        </div>
    );
};

export default Header;