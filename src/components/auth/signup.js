import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import '../../style/signup.css';

class SignUp extends Component {
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
  this.props.signUpUser({email, password});
}

  render(){
    console.log(this.props);
    const {handleSubmit} = this.props;
    return(
      <div className="container sign-up-form jumbotron">
        <h4>Sign Up</h4>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
              label="Please enter an email for you account"
              name="email"
              type="text"
              component={this.renderField}
            />
          <Field
              label="Please enter a password for your account"
              name="password"
              type="password"
              component={this.renderField}
            />

            <Field
              label="Please confirm your password"
              name="passwordConfirm"
              type="password"
              component={this.renderField}
            />

            {this.renderAlert()}
          <button action='submit' className="btn btn-success">
            Sign Up   <i className="fas fa-user-plus"></i>
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
    errors.email="Please enter an email to sign up";
  }
  if(!values.password){
    errors.password="Please enter a password to sign up";
  }
  if(!values.passwordConfirm){
    errors.passwordConfirm="Please confirm your password";
  }
  if(values.password !== values.passwordConfirm){
    errors.passwordConfirm="Passwords must match";
  }
  return errors;
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.error
  };
}

export default reduxForm({
  validate,
  form: 'signup'
})(
  connect(mapStateToProps, actions)(SignUp)
);
