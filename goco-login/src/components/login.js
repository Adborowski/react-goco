import logo from '../logo.svg';
import React from 'react';

export default class Login extends React.Component{

    handleLogin = (e) => {

        e.preventDefault(); // stop the input text from showing in url

        const enteredUsername = e.target.txtUsername.value;
        const enteredPassword = e.target.txtPassword.value;

        const correctUsername = "adam@goco.dk";
        const correctPassword = "GOodCOmpany";

        if (enteredUsername === correctUsername && enteredPassword === correctPassword){
            alert("Login successful");
        } else {
            console.log("Login failed");
        }
        
    }

    render(){

        return(

            <div className="login">

                <div className="image-frame">
                    <img className="App-logo" alt="logo" src={logo}></img>
                </div>

                <p> Dunkit </p>

                <form className="form-login" onSubmit={this.handleLogin}> 
                    <input className="login-input" id="txtUsername" type="text" name="txtUsername" placeholder="Your username"></input>
                    <input className="login-input" id="txtPassword" type="password" name="txtPassword" placeholder="Your password"></input>
                    <button className="button">Submit</button>
                </form> 

            </div>

        )

    }

}