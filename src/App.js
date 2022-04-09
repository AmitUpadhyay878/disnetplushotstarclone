import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
          </Switch>
    </div>
  );
}

export default App;
