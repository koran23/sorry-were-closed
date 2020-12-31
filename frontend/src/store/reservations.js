import { fetch } from "./csrf";

const CREATE_RESERVATION = "reservations/CREATE_RESERVATION";


//Action Creators
const setReservation = (reservation) => ({
  type: CREATE_RESERVATION,
  reservation: reservation
});

//Thunk Action Crreators
export const createReservation = (body) => async (dispatch) => {
  const res = await fetch(`/api/reservation/new-reservation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  // const venues = await res.json();

  if (res.ok) {
    dispatch(setReservation(res.data.reservation));
  }
};

const initialState = {
  reservation: null,
};

//Reducer
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION:
      return {
        ...state,
        reservation: action.reservation,
      };
      default:
        return state;
    }
};

export default reservationReducer;
