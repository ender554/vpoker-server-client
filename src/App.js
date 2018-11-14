import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './component/navbar';
import {Splash} from './component/splash';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App(){
    return(
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Splash} />

          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
