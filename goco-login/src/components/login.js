import logo from '../logo-3.svg';
import React from 'react';
import { withRouter } from "react-router-dom";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const LoginButton = styled(Button)({
    background: 'linear-gradient(45deg, #CF5300 30%, #fab75a 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0,0,0,0.15)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '36px'
  });

class Login extends React.Component{

    state = {
        correctUsername: "adam@goco.dk",
        activeUsername: "",
        usernameError: "",
        activePassword: "",
        correctPassword: "GOodCOmpany",
        passwordError: "",
        loginError: "",
        authSuccess: false
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
            this.setState({authSuccess: true})

            setTimeout(() => {
                this.props.history.push("/home");
            }, 1500)
     
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

            <div className="comp-login">

                {this.state.authSuccess && <div className="welcome-message">Welcome, {this.state.activeUsername}</div>}

                <div className="image-frame">
                    <img alt="logo" src={logo}></img>
                </div>

                <p className="app-name"> Dunkit </p>

                <form className="form-login" onSubmit={this.handleSubmit}> 

                <FormControl
                    error={this.state.usernameError ? true : false}
                    className="login-form-control"
                >
                    <InputLabel htmlFor="txtUsername">Email</InputLabel>
                    <Input 
                        onChange={this.handleChange}
                        onBlur={this.validateCredentials}
                        className="login-input" 
                        id="txtUsername" 
                        type="text" 
                        name="txtUsername"
                        >
                    </Input>
                </FormControl>
                    
                <FormControl
                    error={this.state.passwordError ? true : false}
                    className = "login-form-control"
                >
                    <InputLabel htmlFor="txtPassword">Password</InputLabel>
                    <Input 
                        onChange={this.handleChange}
                        onBlur={this.validateCredentials} 
                        className="login-input" 
                        id="txtPassword" 
                        type="password" 
                        name="txtPassword"
                        >
                    </Input>
                </FormControl>

                    <LoginButton onClick={this.handleSubmit} disabled={!this.state.activePassword} className="login-button">Login</LoginButton>

                </form> 

                <div className="error-display">
                
                    {this.state.usernameError && <p> {this.state.usernameError} </p>}
                    {this.state.passwordError && <p> {this.state.passwordError} </p>}
                    {this.state.loginError && <p> {this.state.loginError} </p>}

                </div>

            </div> // end of .comp-login

        )

    }

}

export default withRouter(Login);