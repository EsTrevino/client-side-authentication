import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Header from './header';
import SignIn from './auth/signin';
import Feature from './feature';

class App extends Component {
  render(){
    return(
      <div className="container">
        <Header />
        <Route path="/signin" component={SignIn} />
        <Route path="/feature" component={Feature} />
      </div>


    )
  }
}

export default App;
