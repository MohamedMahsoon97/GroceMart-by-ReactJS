import React, { Component } from 'react';
import './Footer.css';
import Logo from '../Images/logo-default.png';
import Payment1 from '../Images/payment-1.png';
import Payment2 from '../Images/payment-2.png';
import Payment3 from '../Images/payment-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="footer">
                    <div class="information">
                        <div class="logo-brand">
                            <img src={Logo} alt="logo" />
                        </div>
                        <ul class="list-schedule">
                            <li><span>Weekdays :</span><span>08:00am - 08:00pm</span></li>
                            <li><span>Weekends :</span><span>10:00am - 06:00pm</span></li>
                        </ul>
                        <div class="footer-social">
                            <p>Get Social</p>
                            <ul class="social-list">
                                <li><a class="icon" href="#"><FontAwesomeIcon icon="facebook" /></a></li>
                                <li><a class="icon" href="#"><FontAwesomeIcon icon="twitter" /></a></li>
                                <li><a class="icon" href="#"><FontAwesomeIcon icon="instgram" /></a></li>
                                <li><a class="icon" href="#"><FontAwesomeIcon icon="github-square" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="contacts">
                        <h4 class="footer-classic-title">Contacts</h4>
                        <ul class="contacts-creative">
                            <li>
                                <div class="contact">
                                    <div class="contact-left"><span class="icon-marker"><FontAwesomeIcon icon="map-marker" /></span></div>
                                    <div class="contact-body"><a href="#">523 Sylvan Ave, 5th Floor<br/>Mountain View, CA 94041 USA</a></div>
                                </div>
                            </li>
                            <li>
                                <div class="contact">
                                    <div class="contact-left"><span class="icon-phone"><FontAwesomeIcon icon="phone" /></span></div>
                                    <div class="contact-body"><a href="tel:#">+1 (844) 123 456 78</a></div>
                                </div>
                            </li>
                            <li>
                                <div class="contact">
                                    <div class="contact-left"><span class="icon-email"><FontAwesomeIcon icon="envelope" /></span></div>
                                    <div class="contact-body"><a href="mailto:#">info@demolink.org</a></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="newsletter">
                        <h4 class="footer-classic-title">Newsletter</h4>
                        <p>Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.</p>
                        <form class="form">
                            <div class="form-contact">
                                <div class="form-input">
                                    <label htmlFor="inp-form" id="label">Enter your e-mail</label>
                                    <input type="text" id="inp-form" />
                                </div>
                                <div class="form-button">
                                    <span class="form-icon"><FontAwesomeIcon icon="paper-plane" /></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="copy-rights">
                    <div class="row">
                        <p class="rights"><span>©&nbsp;</span><span class="copyright-year">2021</span><span>&nbsp;</span><span>Grocmart</span><span>.&nbsp;</span><span>All rights reserved</span></p>
                        <div class="payment-img">
                            <div class="group-sm">
                                <img src={Payment1} alt="payment" width="55" height="18" />
                                <img src={Payment2} alt="payment" width="46" height="28" />
                                <img src={Payment3} alt="payment" width="62" height="20" />
                            </div>
                        </div>
                        <div class="Privacy"><a href="#">Privacy Policy</a></div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;