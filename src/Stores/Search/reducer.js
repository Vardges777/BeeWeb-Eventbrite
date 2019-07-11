
const initialState = {
    value:"",
    cityData:[],
    pagination:{},
    latitude:51.4644844,
    longitude:-0.11450349999995524
};

export default function(state = initialState,action){
    switch (action.type) {
        case "VALUE" : {
            return {
                ...state,
                value: action.data
            }
        }
        case "SEARCH_BTN" : {
            return {
                ...state,
                cityData: action.data.events,
                pagination: action.data.pagination
            }
        }
        case "GET_ID" : {
            return {
                ...state,
                latitude:action.latitudeData,
                longitude:action.longitudeData
            }
        }
        default:
            return state;
    }
}
