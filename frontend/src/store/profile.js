import { fetch } from "./csrf";

const GET_PROFILE = "profile/GET_PROFILE";


//Action Creators
const getProfile = (profile) => ({
  type: GET_PROFILE,
  profile: profile
});

//Thunk Action Crreators
export const getCurrentProfile = () => async (dispatch) => {
  const res = await fetch(`/api/profile/me`);
  // const venues = await res.json();

  if (res.ok) {
    dispatch(getProfile(res.data.profile));
  }
};

const initialState = {
  profile: null,
};

//Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
      default:
        return state;
    }
};

export default profileReducer;
