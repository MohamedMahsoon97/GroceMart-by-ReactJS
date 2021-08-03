import React , {Component} from 'react';
import './About.css';
import AboutImg from '../Images/about.jpg';
import SignImg from '../Images/signature.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {
    render() {
        return (
            <div class="about">
                <div class="about-sections">
                    <div class="about-img">
                        <img src={AboutImg} alt="About" />
                    </div>
                    <div class="about-content" id="about-content">
                        <h4 class="heading4">A Few Words About Our Store</h4>
                        <h2 class="heading2">ABOUT US</h2>
                        <p class="text">Grocmart is a family-owned grocery store that has been offering quality products for your everyday life since 1999, while also providing superior service and competitive prices.</p>
                        <div class="group">
                            <div class="group-xl">
                                <a class="button" href="#"><span class="arrow-right"><FontAwesomeIcon icon="arrow-right" /></span></a>
                                <div class="team-navy">
                                    <div class="team-navy-name"><a href="#">Sam Williams</a></div>
                                    <div class="team-navy-status">CEO, Founder</div>
                                </div>
                            </div>
                            <img src={SignImg} alt="signature" width="160" height="55" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;