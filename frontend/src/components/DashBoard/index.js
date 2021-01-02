import { useEffect, useState } from "react";
import Card from '../../styles/card'
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../store/profile";
import { fetchReservation } from "../../store/reservations";
import { fetchVenue } from "../../store/venues";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";



const Profile = ({ theProfile }) => {
  return (
    <div>
      <div>
        <h3>{theProfile.location}</h3>
      </div>
    </div>
  );
};
const Reservation = ({ theReservation }) => {
  return (
    <Card>
      <div className="card">
        <div className="container">
          <h3>{theReservation.Venue.address}</h3>
        </div>
      </div>
    </Card>
  );
};

const DashBoard = () => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  const currentProfile = useSelector((fullReduxState) => {
    return fullReduxState.profile.profile;
  });
  const currentReservation = useSelector((fullReduxState) => {
    return fullReduxState.reservation.reservations;
  });
  // With an empty array:
  // do this once when this component is first shown
  useEffect(() => {
    // Request to the server.
    dispatch(fetchReservation(loggedInUser.id));
    dispatch(getCurrentProfile(loggedInUser.id)); // This is the id that's passed into the route
  }, [dispatch, loggedInUser]);
  // useEffect(() => {
  //   // dispatch(getCurrentProfile(loggedInUser.id));
  //   console.log('fetching profile');
  // }, [dispatch, currentProfile]);

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
      <h3>Reservations:</h3>
      <div>
        {currentReservation &&
          currentReservation.map((reservation) => {
            return <Reservation theReservation={reservation} />;
          })}
      </div>
      <h3>
        Upload a venue for people to party!
        <Link to="/new-venue">
              <Button>here</Button>
            </Link>
      </h3>
    </div>
    
  );
};

export default DashBoard;
