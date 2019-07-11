

export const handleChange = (event) => dispatch => {
    dispatch({
        type:"HANDLE_CHANGE_VALUE",
        name:event.target.name,
        value:event.target.value
    });
};

export const signIn = (e) => (dispatch,getState) => {
    const { signUp:{ userdata } } = getState();
    e.preventDefault();
    if (typeof userdata.email == "string" && typeof userdata.password == "string" && typeof userdata.ReTypePassword == "string") {
        const emailLength = userdata.email.length;
        const password = userdata.password.length;
        var boolean = false;
        if (userdata.password == userdata.ReTypePassword && emailLength >= 6 && password >= 6) {
            let getStorage = localStorage.getItem("data");
            var store = [];
            if (getStorage == null){
                store.push(userdata);
                localStorage.setItem("data",JSON.stringify(store));
            }
            else{
                let getStorage = localStorage.getItem("data");
                store = JSON.parse(getStorage);
                store.push(userdata);
                localStorage.setItem("data",JSON.stringify(store));
            }
            boolean = true;
        } else {
            console.log("Your password or email is too short");
        }
    }
    else{
        console.log("Fill all inputs")
    }

    dispatch({
        type:"REGISTER_BTN",
        registerSuccess:boolean,
        data:store
    })
}
