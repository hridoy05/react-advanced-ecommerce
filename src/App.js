import React from 'react';
import './App.css'

import HomePage from './pages/Homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />


      </Switch>

    </div>
  );
}

export default App;
