import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Galery from './pages/galery'; 
import PricesAndServices from './pages/pricesAndServices'; 
import Contact from './pages/contact'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/galery' exact component={Galery} />
        <Route path='/prices-and-services' exact component={PricesAndServices} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
