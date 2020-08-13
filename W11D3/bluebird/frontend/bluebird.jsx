import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // make sure we have a variable that we can use
  let preloadedState = undefined;
  // if we have a current user (in application.html) then we successfully turned it
  // into a valid POJO on the window which means we can pass it to our preloaded
  // state in the session slice
  if (window.currentUser) {
    // preloaded state mimics the shape of our state, gets updated
    // and now that it has values it gets passed in as the "oldState" to the session
    // reducer
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState);
  // const store = createStore();

  ReactDOM.render(<Root store={store} />, root);
})

// now that we can stay logged in thru refreshing, we need to make it so the current
// user will be redirected if trying to access the sign up page and so that users
// who aren't logged in have restricted access to our site... go to utils folder and
// add file: 'route_utils.jsx'