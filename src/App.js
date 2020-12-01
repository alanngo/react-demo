import React from 'react';
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import About from './components/About/About';
import Issues from './components/Issues/Issues'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {  Nav, Navbar } from 'react-bootstrap';
function App() 
{
  return (
    <Router>
      <div className="App">
      <Navbar bg="dark" align="top">
          <Nav.Link className="text-light" href="/root">Root</Nav.Link>
          <Nav.Link className="text-light" href="/home">Home</Nav.Link>
          <Nav.Link className="text-light" href="/about">About</Nav.Link>
          <Nav.Link className="text-light" href="/issues">Issues</Nav.Link>
        </Navbar>
        <Switch>
        <Route path="/root" exact component={Root}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/issues" exact component={Issues}/>
        </Switch>


      
      </div>
    </Router>
  );
}

export default App;
