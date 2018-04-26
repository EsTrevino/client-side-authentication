import React, {Component} from 'react';

class Header extends Component{
  render(){
    return(
      <div>
        <ul className="nav">
          <li className="nav-item">
            Sign In
          </li>
          <li className="nav-item">
            Sign Out
          </li>
          <li className="nav-item">
            Feature
          </li>
        </ul>
      </div>
    )
  }
}

export default Header;
