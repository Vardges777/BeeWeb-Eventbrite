const initialState = {

};

export default function(state = initialState,action){
    switch (action.type) {
        case "HANDLE_CHANGE" : {
            let actionName = action.name;
            return {
                ...state,
                [actionName]: action.value
            }
        }
        case "LOG_IN" : {
            return {
                ...state,
                logged:action.log
            }
        }
        default:
            return state
    }
}
