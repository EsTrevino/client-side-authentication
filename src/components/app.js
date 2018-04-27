import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Header from './header';
import SignIn from './auth/signin';
import Feature from './feature';
import SignOut from './auth/signout';
import SignUp from './auth/signup';
import Welcome from './welcome';
import requireAuth from './auth/require_auth';

class App extends Component {
  render(){
    return(
      <div className="container">
        <Header />
        <Route exact path="/" component={Welcome} />
        <Route path="/signin" component={SignIn} />
        <Route path="/feature" component={requireAuth(Feature)} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signup" component={SignUp} />
      </div>
    )
  }
}

export default App;
