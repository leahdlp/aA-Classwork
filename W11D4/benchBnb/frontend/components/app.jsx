import React from 'react';
import { Route } from 'react-router-dom'

import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SignUpContainer from './session_form/signup_form_container';
import LogInContainer from './session_form/login_form_container';
import BenchIndexContainer from './benches/bench_index_container'

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>
        
        <AuthRoute path="/signup" component={SignUpContainer} />
        <AuthRoute path="/login" component={LogInContainer} />
        <Route exact path="/" component={BenchIndexContainer} />
    </div>
)

export default App;