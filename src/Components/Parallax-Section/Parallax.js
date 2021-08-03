import React , {Component} from 'react';
import './Parallax.css';
import Backgorund from '../Images/download.png';
import Truck from '../Images/truck.png';
import Affordable from '../Images/affordable.png';
import Fish from '../Images/fish.png';
import Alarm from '../Images/alarm-clock.png';
class Parallax extends Component {
    render() {
        return (
            <div class="parallax">
                <div class="row" id="parallax-content">
                    <div class="parallax-content">
                        <div class="box-header">
                            <div class="box-icon"><img src={Fish} alt="fish" /></div>
                        </div>
                        <h4 class="box-title"><a href="#">QUALITY PRODUCTS</a></h4>
                        <p class="box-text">We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.</p>
                    </div>
                    <div class="parallax-content">
                        <div class="box-header">
                            <div class="box-icon"><img src={Affordable} alt="fish" /></div>
                        </div>
                        <h4 class="box-title"><a href="#">AFFORDABLE PRICES</a></h4>
                        <p class="box-text">Thanks to our affordable pricing policy, our customers don’t have to overpay for the products they need.</p>
                    </div>
                    <div class="parallax-content">
                        <div class="box-header">
                            <div class="box-icon"><img src={Truck} alt="fish" /></div>
                        </div>
                        <h4 class="box-title"><a href="#">FAST SHIPPING</a></h4>
                        <p class="box-text">Our store offers fast worldwide shipping to all customers regardless of what and how much you order.</p>
                    </div>
                    <div class="parallax-content">
                        <div class="box-header">
                            <div class="box-icon"><img src={Alarm} alt="fish" /></div>
                        </div>
                        <h4 class="box-title"><a href="#">OPEN 24/7</a></h4>
                        <p class="box-text">Unlike other grocery shops, we are ready to serve you 24/7 and offer the best selection of groceries.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parallax;