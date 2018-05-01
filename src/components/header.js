import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{
  renderLinks(){
    if(this.props.authenticated){
      return[
        <li className="nav-item" key="features">
          <Link className="nav-link" to="/feature">My Features</Link>
        </li>,
        <li className="nav-item" key="signout">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ]
    } else{
      return [
        <li className="nav-item" key="signIn">
            <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key="signUp">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }

  }
  render(){
    return(
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Redux Authentication</Link>
          </li>
          {this.renderLinks()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, null)(Header);
