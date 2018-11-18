import React from 'react';
import { Card } from './component/card';
import ReactDOM from 'react-dom';
import { NavBar } from './component/navbar';
import {Splash} from './component/splash';
import {LoginForm} from './component/login';
import {HistoryPage} from './component/history';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

function App(){
    return(
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Redirect exact from='/' to='/splash' />
            <Route exact path='/splash' component={Splash} />
            <Route exact path='/card' component={Card} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/history' component={HistoryPage} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
}

export default App;
