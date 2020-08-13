import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

// created this action and it will allow us to create a button that allows the 
// current user to log out
import { logout } from '../../actions/session';

// passing down the current user from our state to our navbar presentational
// component
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

// this makes it so our navbar presentiational component also has access to the
// logout method that we imported and that logs out the current user (we work with
// the thunk actions because they work with our backend ajax queries to update our
// database and our frontend action creators to update the state)
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

// now heading to navbar presentational component