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

        let currentPage;
        if (register === false && logged === false){
            currentPage = <Redirect to="/"/>;

       }
         if (register === true && logged === false){
            currentPage = <Redirect to="/LogIn"/>
        }
        if (logged){
            currentPage = <Redirect to="/Content"/>;
        }
            localStorage.setItem("loggedIn","false");
            localStorage.setItem("register","false");

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
