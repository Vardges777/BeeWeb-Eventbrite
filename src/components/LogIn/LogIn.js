import React, {Component} from "react";
import {connect} from 'react-redux';
import Content from "../Content/Content";
import {handleChange, logIn} from "../../Stores/LogIn/action"

class LogIn extends Component {
    render() {
        const {logInState: {logged}} = this.props;
        const {handleChange, logIn} = this.props;

        return (
            <>
                {
                    logged ? <Content/> : <form className="LogIn">
                        <h1>Log In</h1>
                        <input type="text" name="email" onChange={handleChange}/>
                        <input type="text" name="password" onChange={handleChange}/>
                        <input type="submit" value="Log In" onClick={logIn}/>
                    </form>
                }
            </>
        )
    }
}

export default connect(
    state => ({
        logInState: state.logIn,
    }),
    {
        handleChange,
        logIn
    }
)(LogIn)

