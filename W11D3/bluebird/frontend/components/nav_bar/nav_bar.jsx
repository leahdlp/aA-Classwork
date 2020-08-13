import React from 'react';
import { Link } from 'react-router-dom';
// after doing navbar comtainer

// functional component, desctures currentUSer and logout which we get form container
//  props
export default ({ currentUser, logout }) => {
  // turnary is good here, if there is no currentUser then the value will be nil
  // and therefore not a truthy value
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username} </p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      {/* our sign up and log in buttons that will be displayed in implicit renders
      return statement... but we only want to display these two buttons if they
      are not currently logged in so added ^^^ */}
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">BLUEBIRD</h1>
      <div>
        {display}
      </div>
    </header>
  );
};

// but everytime we reload the page we get logged out so we need to next implement
// the bootstrap functionality (go to app/views/layouts/application.html)