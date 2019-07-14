import React, { Component } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import Content from "../Content/Content";
import Header from "../Header/Header";


class Welcome extends Component {
    render() {
        const {
            signUpState:{ register },
            logInState: { logged }
        } = this.props;

        console.log("register   " + register);
        console.log("logged   " + logged);
        let currentPage;
        if (register === false && logged === false){
            currentPage = <Redirect to="/"/>;
            console.log("Sign Up")
       }
         if (register === true && logged === false){
            currentPage = <Redirect to="/LogIn"/>;
            console.log("Log In")
        }
        if (logged){
            currentPage = <Redirect to="/Content"/>;
            console.log("Content")
        }
        setTimeout(function(){
            localStorage.setItem("loggedIn","false");
            localStorage.setItem("register","false");
        },20000)

        return (
            <Router>
                <Header/>
                <Route path="/" exact component = { SignUp }/>
                <Route path="/LogIn" exact component = { LogIn }/>
                <Route path="/Content" exact component = { Content }/>
                { currentPage }
            </Router>
        )
    }
}

export default connect(
    state => ({
        signUpState: state.signUp,
        logInState: state.logIn,
    })
)(Welcome)
