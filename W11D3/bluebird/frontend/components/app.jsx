import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ChirpIndexContainer from './chirps/chirp_index_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
// import after setting up
import SignUpContainer from './session/signup_container';
// import after setting up (one of the last steps)
import { AuthRoute } from '../utils/route_utils'
import { ProtectedRoute } from '../utils/route_utils'
export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    {/* update this to being a protected route since we don't want non logged in
    users to see chirps, which also automatically redirects when logging out */}
    <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
    {/* not sure why it is /signup because I don't see that in rails routes
    but perhaps you can create your own paths here as well */}
    {/* changed this from regular route to our imported AuthRoute so now when trying
    to access the sign up page or another page that user doesn't need access to 
    when logged in, it will redirect to where we told it to... can wrap any page
    in an AuthRoute component to restrict access when logged in (now go back to 
    utils and add another component to restrict access when logged out) */}
    <AuthRoute path="/signup" component={SignUpContainer} />
  </div>
);

// next heading to navbar container component
