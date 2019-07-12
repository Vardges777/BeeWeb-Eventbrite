import React, { Component } from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import { connect } from 'react-redux';
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn"
import Header from "../Header/header";



class Welcome extends Component {
    render() {

        return (
            <Router>
                {/*{ register ? <LogIn/>:<SignUp/> }*/}
                <Header/>
                <Route path="/" exact component = {SignUp}/>
                <Route path="/signUp" exact component = {LogIn}/>
            </Router>
        )
    }
}

export default connect(
    state => ({
        signUpState: state.signUp,
    })
)(Welcome)
