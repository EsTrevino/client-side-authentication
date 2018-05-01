import axios from 'axios';
import history from '../history';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE} from './types';
const ROOT_URL = 'http://localhost:3090';

export function signInUser({email, password}){
  return function(dispatch){
    //submit email password to server
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {
        //if request is successful....
          //-update state to indicate user is authenticated
            dispatch({type: AUTH_USER});
          //-save jwt token
            localStorage.setItem('token', response.data.token);
          //-redirect to route '/feature'
            history.push('/feature');
      })
      .catch(() => {
        //if request is not successful..
          //show error to user
          dispatch(authError('Incorrect Email or Password. Please try again'));
      });
  }
}

export function signUpUser({email, password}){
  return function(dispatch){
    //submit email password signup to server
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        //if request is successful....
          //-update state to indicate user is authenticated
            dispatch({type: AUTH_USER});
          //-save jwt token
            localStorage.setItem('token', response.data.token);
          //-redirect to route '/feature'
            history.push('/feature');
      })
      .catch(() => {
        //if request is not successful..
          //show error to user
          dispatch(authError('That email is already in use. Please try a different email'));
      });
  }
}

export function signOutUser(){
  //delete token thats saved in localStorage
  localStorage.removeItem('token');
  //want to return action type UNAUTH_USER
  return {
    type: UNAUTH_USER
  }
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL,
      { headers: {authorization: localStorage.getItem('token') }
    })
      .then(response => {
          dispatch({
            type: FETCH_MESSAGE,
            payload: response.data.message
          })
      });
  }
}
