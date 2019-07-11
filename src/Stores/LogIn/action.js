export const handleChange = (event) => dispatch => {
    dispatch({
        type:"HANDLE_CHANGE",
        name:event.target.name,
        value:event.target.value
    })
};

export const logIn = (event) => (dispatch,getState) => {
    event.preventDefault()
    const { logIn,signUp } = getState();
    let loogedIn = false;
    signUp.userObjData.map((item)=> {
        if ((item.email === logIn.email) && (item.password === logIn.password)) {
            loogedIn = true
        }
    })
    dispatch({
        type:"LOG_IN",
        log:loogedIn

    })
}
