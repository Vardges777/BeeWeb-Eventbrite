const url = "https://www.eventbriteapi.com/v3";
export const inputValue = (event) => dispatch => {
    dispatch({
        type:"VALUE",
        data:event.target.value
    })
};

export const searchButton = () => async (dispatch,getState) => {
    const {search:{value}} = getState();
    // const lowerCase = value.toLowerCase();
    // const correctName = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    // console.log(lowerCase)
    try {
        const response = await fetch(`${url}/events/search/?q=${value}&token=BHVEJSNZNZRUKYVRCKVH`,{
            method:"GET"
        });
        const result = await response.json();
        return dispatch({
            type:"SEARCH_BTN",
            data:result
        })
    }catch(e){
        console.log(e.message)
    }
};

export const viewLocation = (event) =>async dispatch => {
    const id = event.target.id;
    const response = await fetch(`${url}/events/${id}/?expand=venue&token=BHVEJSNZNZRUKYVRCKVH`,{
        method:"GET"
    });
    const result = await response.json();
    const placeLatitude = Number(result.venue.address.latitude);
    const placeLongitude = Number(result.venue.address.longitude);
    return dispatch({
        type:"GET_ID",
        latitudeData:placeLatitude,
        longitudeData:placeLongitude
    })

};


