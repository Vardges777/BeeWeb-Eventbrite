const initialState = {
    userdata:{},
    register:false,
    userObjData:[]
};

export default function(state = initialState,action){
    switch (action.type) {
        case  "HANDLE_CHANGE_VALUE" : {
            let actionName = action.name;
            return {
                ...state,
                userdata: {
                    ...state.userdata,
                    [actionName]: action.value
                }
            }
        }
        // dataUser.map((user) => {
        //      if (userdata.email == user.email){
        //          console.log("ka")
        //      }
        //      else{
        //          console.log("chka")
        //      }
        // });
        case "REGISTER_BTN" : {
            return{
                ...state,
                register:action.registerSuccess,
                userObjData:action.data
            }
        }
        default:
            return state
    }
}
