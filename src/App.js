import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Photos from './components/Photos'
import Careers from './components/Careers'
import Reviews from './components/Reviews'
import Blank from './components/Blank'
import Careers1 from './pictures/career2.JPG'
import './custom.scss'
import 'react-image-lightbox/style.css'; 


class App extends React.Component {



  render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <Blank />
        <Switch>
          <Route exact path="/about" render={() => <About/> } />
          <Route exact path="/contact" render={() => <Contact/> } />
          <Route exact path="/photos" render={() => <Photos/> } />
          <Route exact path="/careers" render={() => <Careers/> } />
          <Route exact path="/reviews" render={() => <Reviews/> } />
          <Route exact path="/cat" render={() => <Careers1/> } />
          <Route exact path="/" render={() => <HomePage/> } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
