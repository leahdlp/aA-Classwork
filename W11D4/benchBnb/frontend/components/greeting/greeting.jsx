import React from 'react';
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
    constructor (props) {
        super (props);
    }

    loggedIn (user) {
        let logout = this.props.logout;
        return (
            <div className="welcome-header">
                <h2>Welcome to BenchBnB, {user.email}!</h2>
                <button className="logout-btn"onClick={logout}>Log Out!</button>
            </div>
        )
    }

    loggedOut () {
        return (
            <div className="login-signup">
                <Link to="/signup">Sign Up!</Link>
                &nbsp;or&nbsp;
                <Link to="/login">Log In!</Link>
            </div>
        )
    }

    render () {
        let user = this.props.currentUser;
        let greeting = user ? this.loggedIn(user) : this.loggedOut();
        return greeting;
    }
}

export default Greeting;