import logo from '../logo.svg';
import React from 'react';

export default class Login extends React.Component{

    state = {
        correctUsername: "adam@goco.dk",
        activeUsername: "",
        usernameError: "",

        activePassword: "",
        correctPassword: "GOodCOmpany",
        passwordError: "" 
    }

    handleChange = (e) => {

        e.preventDefault();

        // handle username change
        if (e.target.name === "txtUsername"){ (
            this.setState({activeUsername:e.target.value}));
        }

        // handle password change
        if (e.target.name === "txtPassword"){

            (this.setState({activePassword:e.target.value}))
        };

        console.log(this.state);

    }

    handleSubmit = (e) => {

        e.preventDefault(); 
        console.log(this.state);
        
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

                    <button disabled={this.state.usernameError || this.state.passwordError} className="button">Submit</button>

                    {this.state.usernameError && <p> {this.state.usernameError} </p>}
                    {this.state.passwordError && <p> {this.state.passwordError} </p>}

                    
                    
                </form> 

            </div>

        )

    }

}