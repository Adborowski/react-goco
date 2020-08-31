import logo from '../logo.svg';
import React from 'react';

export default class Login extends React.Component{

    state = {
        correctUsername: "adam@goco.dk",
        correctPassword: "GOodCOmpany",
        activeUsername: "",
        activePassword: "",
        errorMessage: {
            usernameError: "",
            passwordError: "" 
        }
    }

    handleChange = (e) => {

        e.preventDefault();

        if (e.target.name === "txtUsername"){ (this.setState({activeUsername:e.target.value}))};
        if (e.target.name === "txtPassword"){ (this.setState({activePassword:e.target.value}))};

    };

    handleLogin = (e) => {

        e.preventDefault(); 
        console.log(this.state);
        
    }

    render(){

        return(

            <div className="login">

                <div className="image-frame">
                    <img className="App-logo" alt="logo" src={logo}></img>
                </div>

                <p> Dunkit </p>

                <form className="form-login" onSubmit={this.handleLogin}> 

                    <input 
                        onChange={this.handleChange} 
                        className="login-input" 
                        id="txtUsername" 
                        type="text" 
                        name="txtUsername" 
                        placeholder="Your username">
                    </input>

                    {this.state.errorMessage.usernameError && <p> {this.state.errorMessage.usernameError} </p>}

                    <input 
                        onChange={this.handleChange} 
                        className="login-input" 
                        id="txtPassword" 
                        type="password" 
                        name="txtPassword" 
                        placeholder="Your password">
                    </input>
                    
                    {this.state.errorMessage.passwordError && <p> {this.state.errorMessage.passwordError} </p>}

                    <button className="button">Submit</button>
                    
                </form> 

            </div>

        )

    }

}