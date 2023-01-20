import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Weather } from './components/Weather';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import './custom.css'
import { Redirect } from 'react-router-dom';

export default class App extends Component {
  static displayName = App.name;


    constructor() {
        super();
        this.state = {
            name: "React",
            isUserAuthenticated: false,
        };
    }

    render() {
     
    return (
        <Layout>
            <Route exact path='/' render={() => {
                return (this.isUserAuthenticated ?
                    <Redirect to="/" /> :
                    <Redirect to="/login" />);
            }} />
            <Route exact path="/" component={Home}/>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <AuthenticatedTemplate><Route path='/weather' component={Weather} /></AuthenticatedTemplate>
      </Layout>
    );
        
  }
}
