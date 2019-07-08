import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Contact from './Contact';
import Events from './Events';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
