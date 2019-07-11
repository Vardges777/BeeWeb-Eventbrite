import { combineReducers } from "redux"
import search from "../Stores/Search/reducer"
import signUp from "../Stores/SignUp/reducer"
import logIn from "../Stores/LogIn/reducer"
export default combineReducers({
    search,
    signUp,
    logIn
})
