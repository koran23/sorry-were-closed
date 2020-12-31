import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../store/profile";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";

const Profile = ({ theProfile }) => {
  return (
    <div>
      <h3>{theProfile.location}</h3>
    </div>
  );
};
// const Reservation = ({ theReservaton }) => {
//   return (
//     <div>
//       <h3>{theReservaton}</h3>
//     </div>
//   );
// };

const DashBoard = () => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  console.log(loggedInUser);

  const currentProfile = useSelector((fullReduxState) => {
    return fullReduxState.profile.profile;
  });
  const currentReservation = useSelector((fullReduxState) => {
    return fullReduxState.reservation.reservation;
  });
  // With an empty array:
  // do this once when this component is first shown
  useEffect(async () => {
    // Request to the server.
    // const response = await fetch("/api/bands");
    // setBands(response.data.bands);
    dispatch(getCurrentProfile());
  }, []);

  return (
    <div>
      <h2></h2>
      <div>{loggedInUser && <h3>Welcome {loggedInUser.username}</h3>}</div>
      <div>
        {!currentProfile && (
          <h3>
            Looks like you dont have a profile. Create one
            <Link to="/new-profile">
              <Button>here</Button>
            </Link>
          </h3>
        )}
        {currentProfile && <Profile theProfile={currentProfile} />}
      </div>
      <div>
        {/* {!currentReservation && <h3>Loading...</h3>}
        {currentReservation && <Profile theReservaton={currentReservation} />} */}
      </div>
    </div>
  );
};

export default DashBoard;
