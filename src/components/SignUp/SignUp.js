import React,{Component} from "react"
import { connect } from 'react-redux';
import LogIn from "../LogIn/LogIn"
import { handleChange,signIn } from "../../Stores/SignUp/action"

class SignUp extends Component{
    render(){
        const { handleChange,signIn } = this.props;
        const { signUpState:{ register } } = this.props;
        return(
            <>
                {register ? <LogIn/> :  <form className="signUp">
                    <h1>SignUp</h1>
                    <input type="text" name="email" placeholder="Email"  onChange = { handleChange }/>
                    <input type="text" name="password" placeholder="Password"  onChange = { handleChange }/>
                    <input type="text" name="ReTypePassword" placeholder="Re-type Password"  onChange = { handleChange }/>
                    <input type="submit" onClick={ signIn } value="Register"/>
                </form>}

            </>


        )
    }
}

export default connect(
    state => ({
        signUpState: state.signUp,
    }),
    {
        handleChange,
        signIn
    }
)(SignUp)
