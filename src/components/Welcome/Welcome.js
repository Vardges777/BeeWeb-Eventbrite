import React, { Component } from "react";
import SignUp from "../SignUp/SignUp";
import { connect } from 'react-redux';
import LogIn from "../LogIn/LogIn"

class Welcome extends Component {
    render() {
        const { signUpState:{ register } } = this.props;
        return (
            <>
                { register ? <LogIn/>:<SignUp/> }
            </>
        )
    }
}

export default connect(
    state => ({
        signUpState: state.signUp,
    })
)(Welcome)
