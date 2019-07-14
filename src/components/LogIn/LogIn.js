import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    handleChange,
    logIn,
    notLogged
} from "../../Stores/LogIn/action"

class LogIn extends Component {
    render() {
        const { handleChange, logIn } = this.props;
        return (
            <form className="LogIn">
                <h1>Log In</h1>
                <input type="text" name="email" onChange={ handleChange }/>
                <input type="text" name="password" onChange={ handleChange }/>
                <input type="submit" value="Log In" onClick={ logIn }/>
            </form>
        )
    }
}

export default connect(
    state => ({
    }),
    {
        handleChange,
        logIn,
        notLogged
    }
)(LogIn)

