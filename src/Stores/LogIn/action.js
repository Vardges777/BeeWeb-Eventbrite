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
    let dataUser = [];
    dataUser = JSON.parse(localStorage.getItem("data"));
    let users = JSON.parse(localStorage.getItem("users"));
    if (users === true){
        dataUser.map((item)=> {
            if ((item.email === logIn.email) && (item.password === logIn.password)) {
                localStorage.setItem("loggedIn","true")
            }
        });

        if (JSON.parse(localStorage.getItem("loggedIn")) === false){
            console.log("Your password or email is not correct")
        }
    }
    else{
        console.log("Please register")
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
