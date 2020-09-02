import React from 'react';
import Header from './Header'
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";
import firebase from "./firebase";


function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
      <Switch>
        <Route path="/chat">
          <h1>i am the chatpath</h1>
        </Route>
        <Route path="/">
        <TinderCards />
        <SwipeButtons />
        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
