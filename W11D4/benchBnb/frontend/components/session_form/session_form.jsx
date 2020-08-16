import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField (field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    }
    
    handleSubmit (event) {
        event.preventDefault();
        
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        
        this.setState({
            email: "",
            password: ""
        })
    }
    
    renderHeader () {
        let type = this.props.formType;
        let header = type === 'signup' ? 'SIGNUP PAGE' : 'LOGIN PAGE'
        
        header = <header>{header}</header>
        return header;
    }
    
    renderErrors () {
        return (
            <ul>
                { this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
    
    renderLinkTo () {
        let type = this.props.formType;
        
        if (type === 'login') {
            return <Link to="/signup">Sign Up</Link>;
        } else { 
            return <Link to="/login">Log In</Link>;
        }
    }
    
    render () {
        return (
            <div>
                { this.renderHeader() }
                { this.renderErrors() }

                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.updateField('email')}
                            className="input-field"
                            />
                    </label>
                    <br/>
                    <label>Password:
                        <input 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.updateField('password')}
                            className="input-field"
                            />
                    </label>
                    <br/>
                    <input 
                        className="submit-btn" 
                        type="submit" 
                        value={this.props.formType}
                    />
                    <br/>
                    { this.renderLinkTo() }
                </form>
            </div>
        )
    }
}

export default SessionForm;
