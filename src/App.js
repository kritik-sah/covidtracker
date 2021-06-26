import React from 'react';
import './App.css';
import Header from "./component/Header"
import Navbar from "./component/Navbar"
import About from "./component/About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
    
      <Router>
      <Navbar />
      <Switch>
          <Route path="/social">
            <About />
          </Route>
          <Route path="/">
            <Header/>
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
