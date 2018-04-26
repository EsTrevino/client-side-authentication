import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import '../../style/signin.css';

class SignIn extends Component{

  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger error-message">
          <strong>Oops!</strong>
          <h6 className="invalid">{this.props.errorMessage}</h6>
        </div>
      )
    }
  }

  renderField(field){
  return(
    <div className="form-group">
      <label>{field.label}</label>
      <input
        className="form-control"
        type={field.type}
        {...field.input}
      />
      <div className="invalid">
        {field.meta.touched ? field.meta.error: ''}
      </div>
    </div>
  );
}

  handleFormSubmit({email, password}){
    this.props.signInUser({email, password});

  }

  render(){
    const {handleSubmit} = this.props;

    return (
      <div className="container sign-in-form jumbotron">
        <h4>Sign In</h4>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
              label="Email"
              name="email"
              type="text"
              component={this.renderField}
            />
            <Field
                label="Password"
                name="password"
                type="password"
                component={this.renderField}
              />
            {this.renderAlert()}
          <button action='submit' className="btn btn-primary">
            Sign In
            <i className="fas fa-sign-in-alt"></i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values){
  //this function will be called for us
  //values is an object that has values user has entered into form
  const errors = {};
  //if errors has any properties, redux forms assumes
  //it is invalid
  if(!values.email){
    errors.email="Please enter an email";
  }
  if(!values.password){
    errors.password="Please enter a password";
  }
  return errors;
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  validate,
  form: 'signin',
})(
  connect(mapStateToProps, actions)(SignIn)
);
