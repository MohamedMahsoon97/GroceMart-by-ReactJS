import React, { Component } from 'react';
import './Header.css';
import Logo from '../Images/logo-default.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <a className="navbar-logo" href="#"><img src={Logo} alt="" /></a>
                <label htmlFor="nav-Bars"><i className="fa fa-bars"></i></label>
                <input type="checkbox" id="nav-Bars" />
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li className="drop"><a href="#" className="dropdown">Pages</a>
                        <ul className="dropdown-content">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">What We Offer</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Pricing List</a></li>
                        </ul>
                    </li>
                    <li className="drop"><a href="#" className="dropdown">Blog</a>
                        <ul className="dropdown-content">
                            <li><a href="#">GRID BLOG</a></li>
                            <li><a href="#">BLOG LIST</a></li>
                            <li><a href="#">BLOG POST</a></li>
                        </ul>
                    </li>
                    <li className="drop" ><a className="dropdown" href="#">Gallery</a>
                        <ul className="dropdown-content">
                            <li><a href="#">GRID GALLERY</a></li>
                            <li><a href="#">GRID FULLWIDTH GALLERY</a></li>
                            <li><a href="#">MASONRY GALLERY</a></li>
                            <li><a href="#">MASONRY GALLERY</a></li>
                        </ul>
                    </li>
                    <li className="drop"><a href="#" className="dropdown">Elements</a>
                        <ul className="dropdown-content">
                            <li><a href="#">Product list</a></li>
                            <li><a href="#">Product details</a></li>
                            <li><a href="#">Product details</a></li>
                            <li><a href="#">Product details</a></li>
                        </ul>
                    </li>
                    <li className="drop"><a href="#" className="dropdown">Shop</a>
                        <ul className="dropdown-content">
                            <li><a href="#">ECWID SHOP</a></li>
                            <li><a href="#">GRID SHOP</a></li>
                            <li><a href="#">SHOP LIST</a></li>
                            <li><a href="#">SINGLE PRODUCT</a></li>
                            <li><a href="#">CART PAGE</a></li>
                        </ul>
                    </li>
                </ul>
                
                <ul className="navbar-icon">
                    <li><a href="#"><FontAwesomeIcon icon="search" /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon="shopping-cart" /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon="bars" /></a></li>
                    <li className="bars" id="bars">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>                            
                    </li>
                </ul>
            </nav>

        )
    }
};

export default Header;