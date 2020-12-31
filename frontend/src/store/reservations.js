import { fetch } from "./csrf";

const CREATE_RESERVATION = "reservations/CREATE_RESERVATION";
const FETCH_RESERVATION = "reservations/FETCH_RESERVATION";

//Action Creators
const setReservation = (reservation) => ({
  type: CREATE_RESERVATION,
  reservation: reservation,
});

const getReservation = (reservations) => ({
  type: FETCH_RESERVATION,
  reservations: reservations,
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

export const fetchReservation = (userId) => async (dispatch) => {
  const res = await fetch(`/api/profile/me/reservation/${userId}`)
  // const venues = await res.json();

  if (res.ok) {
    dispatch(getReservation(res.data.reservations));
  }
};

const initialState = {
  reservation: null,
  reservations: null
};

//Reducer
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION:
      return {
        ...state,
        reservation: action.reservation,
      };
    case FETCH_RESERVATION:
      return {
        ...state,
        reservations: action.reservations,
      };
    default:
      return state;
  }
};

export default reservationReducer;
