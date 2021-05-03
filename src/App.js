import './App.css';
import { Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Escrever from './Escrever';
import Timeline from './Timeline';
import Logout from './Logout';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import MainLogado from './MainLogado';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { useState } from 'react';

function App() {

  var log_user = localStorage.getItem('redesocial')

  return (
    <div className="main-app">
      <BrowserRouter>
      <Switch>
        <PrivateRoute  path="/timeline">
        <MainLogado usuario={log_user} />  
        <Escrever />
        <Timeline posts='timeline'/>
        </PrivateRoute>
        <PrivateRoute path="/my-posts">
        <MainLogado usuario={log_user} />
        <Timeline usuario={log_user}/>
        </PrivateRoute>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/logout">
        <Logout />
        </Route>
        <Route path="/">
        <Login />
        </Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
