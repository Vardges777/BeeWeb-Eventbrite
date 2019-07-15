

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
    let alreadyRegistered = true;

    localStorage.setItem("register","false");
    let boolean = JSON.parse(localStorage.getItem("register"));
    var store = [];
    let getStorage = localStorage.getItem("data");
    if (typeof userdata.email == "string" && typeof userdata.password == "string" && typeof userdata.ReTypePassword == "string") {
        const emailLength = userdata.email.length;
        const password = userdata.password.length;
        let getStorage2 = localStorage.getItem("data");
        if (userdata.password == userdata.ReTypePassword && emailLength >= 6 && password >= 6) {
            if (getStorage == null){
                store.push(userdata);
                localStorage.setItem("data",JSON.stringify(store));
                localStorage.setItem("register","true")
                localStorage.setItem("users","true")
            }
            else{
                JSON.parse(getStorage2).map((item) => {
                    if(item.email == userdata.email){
                        alreadyRegistered = false;
                    }
                });
                if (alreadyRegistered) {
                    store = JSON.parse(getStorage);
                    store.push(userdata);
                    localStorage.setItem("data",JSON.stringify(store));
                    localStorage.setItem("register","true");
                    localStorage.setItem("users","true")

                }
                else{
                    console.log("This email is already exist")
                }
            }

        } else {
            console.log("Your password or email is too short");
        }
    }
    else{
        console.log("Fill all inputs")
    }
    let  successfullRegistered = JSON.parse(localStorage.getItem("register"));
    dispatch({
        type:"REGISTER_BTN",
        registerSuccess:successfullRegistered,
        data:store
    })
}
