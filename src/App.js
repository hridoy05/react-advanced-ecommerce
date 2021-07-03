import React from 'react';
import './App.css'

import HomePage from './pages/Homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase.utils'
class App extends React.Component{
   state = {
        currentUser: null
    }
    unsubscripeFromAuth = null
  componentDidMount(){
    this.unsubscripeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscripeFromAuth()
  }
  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />


      </Switch>

    </div>
  );
  }
}

export default App;
