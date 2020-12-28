import { fetch } from './csrf';


const GET_VENUES = 'venues/GET_VENUES'

//Action Creators
const setVenues = (payload) => ({
    type: GET_VENUES,
    payload
})

//Thunk Action Crreators
export const getVenues = (id) => async (dispatch) => {
    const res = await fetch(`/api/venues`);
    const venues = await res.json();

    if (res.ok) {
    dispatch(setVenues(venues))
    }
};

//Reducer
const venueReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_VENUES:
            return action.payload
        default:
            return state;
    }
};


export default venueReducer;