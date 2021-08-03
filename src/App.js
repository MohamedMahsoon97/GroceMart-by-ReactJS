import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import About from './Components/About-Section/About';
import Parallax from './Components/Parallax-Section/Parallax'
import Footer from './Components/Footer/Footer';

// import fontawesome 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch , faShoppingCart , faBars , faPaperPlane ,
  faMapMarker ,  faPhone , faEnvelope , faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

library.add ( fab , faSearch , faShoppingCart , faBars ,
              faMapMarker , faPhone , faEnvelope ,
              faArrowRight , faPaperPlane );

class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <About />
                <Parallax />
                <Footer />
            </div>
        )
    }
};

export default App;