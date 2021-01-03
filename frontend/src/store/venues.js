import { fetch } from "./csrf";

const SET_ALL_VENUES = "venues/setVenues";
const CREATE_VENUE = "venues/createVenue";

//Action Creators
const setVenues = (venues) => ({
  type: SET_ALL_VENUES,
  venues: venues,
});

const createVenue = (venue) => ({
  type: CREATE_VENUE,
  venue: venue,
});

//Thunk Action Crreators
export const fetchAllVenues = () => async (dispatch) => {
  const res = await fetch(`/api/venue`);
  // const venues = await res.json();

  if (res.ok) {
    dispatch(setVenues(res.data.venues));
  }
};

export const fetchVenues = (userId) => async (dispatch) => {
  const res = await fetch(`/api/venue/${userId}`);
  // const venues = await res.json();

  if (res.ok) {
    dispatch(setVenues(res.data.venues));
  }
};

export const setVenue = (body) => async (dispatch) => {
  const res = await fetch(`/api/venue/new-venue`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  // const venues = await res.json();

  if (res.ok) {
    dispatch(createVenue(res.data.venue));
  }
};

const initialState = [];

//Reducer
const venueReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ALL_VENUES:
      newState = action.venues;
      return {...initialState,
        venues: newState};
    case CREATE_VENUE:
      newState = action.venue;
      return newState;
    default:
      return state;
  }
};

export default venueReducer;
