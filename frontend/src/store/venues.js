import { fetch } from './csrf';


const SET_ALL_VENUES = 'venues/setVenues';

//Action Creators
const setVenues = (venues) => ({
    type: SET_ALL_VENUES,
    venues: venues,
})

//Thunk Action Crreators
export const fetchAllVenues = () => async (dispatch) => {
    const res = await fetch(`/api/venue`);
    const venues = await res.json();

    if (res.ok) {
    dispatch(setVenues(venues))
    }
};

const initialState = [];

//Reducer
const venueReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ALL_VENUES:
            newState = action.venues
            return newState;
        default:
            return state;
    }
};


export default venueReducer;