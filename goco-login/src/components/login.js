import logo from '../logo.svg';
import React from 'react';
import { withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';

class Login extends React.Component{

    state = {
        correctUsername: "adam@goco.dk",
        activeUsername: "",
        usernameError: "",
        activePassword: "",
        correctPassword: "GOodCOmpany",
        passwordError: "",
        loginError: ""
    }

    // on keystroke in inputs
    handleChange = (e) => {

        e.preventDefault();

        // handle change in username input
        if (e.target.name === "txtUsername"){ (
            this.setState({activeUsername:e.target.value}));
        }

        // handle change in password input
        if (e.target.name === "txtPassword"){
            (this.setState({activePassword:e.target.value}))
        };

        console.log(this.state);

    }

    handleSubmit = (e) => {

        e.preventDefault(); 
        console.log(this.state);

        if (this.state.activeUsername === this.state.correctUsername && this.state.activePassword === this.state.correctPassword){
            this.props.history.push("/home");
        } else {
            this.setState({loginError: "Incorrect Password"})
        }

    }

    validateCredentials = (e) => {

        // validate the username (regex email validation)
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.activeUsername) === false){
            this.setState({usernameError: "Please enter a valid email"});
        } else {
            this.setState({usernameError: ""});
            
        }

        // validate the password ('required' validation)
        if (e.target.value.length === 0){
            this.setState({passwordError: "Password is required"})
        } else {
            this.setState({passwordError: ""})
        }

    }
                
    render(){

        return(

            <div className="login">

                <div className="image-frame">
                    <img className="App-logo" alt="logo" src={logo}></img>
                </div>

                <p> Dunkit </p>

                <form className="form-login" onSubmit={this.handleSubmit}> 

                    <input 
                        onChange={this.handleChange}
                        onBlur={this.validateCredentials}
                        className="login-input" 
                        id="txtUsername" 
                        type="text" 
                        name="txtUsername" 
                        placeholder="Your username">
                    </input>

                    <input 
                        onChange={this.handleChange}
                        onBlur={this.validateCredentials} 
                        className="login-input" 
                        id="txtPassword" 
                        type="password" 
                        name="txtPassword" 
                        placeholder="Your password">
                    </input>

                    <Button disabled={!this.state.activePassword} className="button">Submit</Button>

                    {this.state.usernameError && <p> {this.state.usernameError} </p>}
                    {this.state.passwordError && <p> {this.state.passwordError} </p>}
                    {this.state.loginError && <p> {this.state.loginError} </p>}

                </form> 

            </div>

        )

    }

}

export default withRouter(Login);