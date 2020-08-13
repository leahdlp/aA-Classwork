import React from 'react';

// after finishing container

class Signup extends React.Component {
    constructor (props) {
        super(props);
        // want a local state for the form fields
        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // build actions that the form will use:
    
    // want to handle input for username, email, and passsword so we don't need 
    // 3 separate functions... setting it as type instead of a specific key for 
    // the local state means that it can be any of the 3 that we pass in to our
    // setState method.
    handleInput(type) {
        // want to return an arrow function that will set state for us
        // event could be something like the user typing in the input fields 
        // (events object from event handler)
        return (event) => {
            // nesting type in square brackets means it will be evaluated
            // (for the value of it as a variable) before being assigned to the key
            // updating the state with the object
            this.setState({ [type]: event.target.value })
        }
    }

    handleSubmit(event) {
        // default action for a button in a form is making a post request which
        // will have the form re-render and we don't necessarily want to do that
        event.preventDefault();
        // receiving this from our container component, method to make a new user
        // starting at the backend and then going thru the front end
        // passing in this.state is because our local state should have the username,
        // email, and password by the time the user clicks a submit button, and those
        // are the necessary attributes to create a new user
        this.props.createNewUser(this.state)
            // upon successful creation of our new users we want to redirect them
            // to the chiprs page (or whichever arbitrary/ideal page) and history.push(path)
            // is a way to do that... adding something to the browsing history as
            // the most recentt thing means we must be at that page?
            // we have access to this history function in props because our component
            // is wrapped in a < Route /> component
            .then(() => this.props.history.push('/chirps'));
    }

    render () {
        return (
            <div className="session-form">
                <h2>Sign Up!</h2>
                <form>
                    <label>Username:
                        <input 
                            // so that input field is a regular textbox
                            type="text" 
                            // so that what the user inputs updates this value
                            // used to be a strong param in rails but now it is
                            // the local state with the corresponding key
                            value={this.state.username} 
                            // when anything in this text field changes (even just
                            // adding one character) it calls our handleInput
                            // method and passes in the value thus far, and updates
                            // the local state
                            onChange={this.handleInput(username)}
                        />
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput(email)}
                        />
                    </label>
                    <label>Password:
                        <input
                            // textbox with privacy
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput(password)}
                        />
                    </label>
                    {/* on click event listener means when they click this button
                    it essentiall submits our form (not by immediately re-rendering
                    but...) by calling our handle submit function... however 
                    idk if its because we don't invoke this to where we do indeed
                    invoke handleInput... but we need to bind handleSubmit in the
                    constructor before its all good */}
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default Signup;

// now that we have signup component we can render.. so time to update app.jsx