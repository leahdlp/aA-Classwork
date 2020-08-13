// components that will automate the process of users only being able to see certain 
// components when they have the right privileges 

// because they're components
import React from 'react';
// because they'll be connected components
import { connect } from 'react-redux';
// Redirect - redirect users to different views depending on whether they have the right
// privileges
// Route - these will be route specific components
// withRouter - give different components access to match, location, history props
import { Redirect, Route, withRouter } from 'react-router-dom';

// get different props that all these will rely on
// we are worried about whether or not a user is logged in

const mapStateToProps = state => ({
    // will equate to true of false depending on whether or not we have a current
    // user
    loggedIn: Boolean(state.session.currentUser)
});

// auth route components (login, signup)... if they are logged in but try to access
// sign up or login page we want to redirect them to home page (or whatever page)
// we will call this component as such: 
//  <AuthRoute path="" component={} />
// loggedIn - we get from mapStateToProps
// path - path that we are looking for, will be passed down when calling component
// component - will be passed down when calling component, this syntax allows us
// to take the value of the lowercase component and access it by calling the upper
// uppcase component, which is good because components need to be uppercase when
// we try to render them
// functional component automatically renders 
const Auth = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        // takes in an arrow function which turns into a react component
        render={ props => {
            // if loggedIn trying to access auth pages, we want to redirect to root
            // directory (likely a home page), if not logged in render auth component
            // ...props spreads all the different props and passes them down to 
            // this component
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        }}
    />
);

// test this out by going to app.jsx and importing it
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))

// if not logged in trying to access routes in our page that are only for logged
// in users... we redirect them to the sign up page... if they are logged in then
// they get access
const Protected = ({ loggedIn, path, component: Component }) => {
    <Route
        path={path}
        render={ props => {
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        }}
    />
}

// again import and add to app.jsx
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));