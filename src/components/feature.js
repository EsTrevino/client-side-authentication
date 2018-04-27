import React, {Component} from 'react';

class Feature extends Component {
  render(){
    return(
      <div>
        this is a protected feature. User must be authenticated to see this.
      </div>
    )
  }
}

export default Feature;
