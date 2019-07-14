export const handleChange = (event) => dispatch => {
    dispatch({
        type:"HANDLE_CHANGE",
        name:event.target.name,
        value:event.target.value
    })
};

export const logIn = (event) => (dispatch,getState) => {
    event.preventDefault();
    const { logIn } = getState();
    localStorage.setItem("loggedIn","false")
    // let loogedIn = false;
    let dataUser = [];
    dataUser = JSON.parse(localStorage.getItem("data"));
    dataUser.map((item)=> {
        if ((item.email === logIn.email) && (item.password === logIn.password)) {
            localStorage.setItem("loggedIn","true")
            // loogedIn = true
        }
    });

    if (JSON.parse(localStorage.getItem("loggedIn")) === false){
        console.log("Your password or email is not correct")
    }

    dispatch({
        type:"LOG_IN",
        log:JSON.parse(localStorage.getItem("loggedIn"))
    })
};

export const notLogged = () => (dispatch) => {
    let logged = false;
    dispatch({
        type:"NOT_LOGGED",
        log:logged
    })
}
