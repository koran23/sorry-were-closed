import { useEffect, useState } from "react";
import Card from "../../styles/card";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile, deleteCurrentProfile } from "../../store/profile";
import { fetchReservation } from "../../store/reservations";
import { fetchVenues } from "../../store/venues";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";
import {useSpring, animated} from 'react-spring';
import { modal, modalDiv } from '../../UI/Modal';
import EditProfileButton from '../../components/EditProfileModal/index'
import EditProfilePage from "../EditProfilePage";



const Profile = ({ theProfile }) => {
  return (
    <div>
      <div>
        <h3>Location: {theProfile.location}</h3>
        <h3>About Me: {theProfile.bio}</h3>
      </div>
     
      <Link to='/edit-profile/${loggedInUser.id}'><Button>Edit</Button></Link>
      

    </div>
  );
};

const Reservation = ({ theReservation }) => {
  const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })
  return (
    
    <Card>
      <animated.div style={props}>
        <div>
          <h2>From:</h2>
          <h3>{theReservation.startDate}</h3>
          <h2>To:</h2>
          <h3>{theReservation.endDate}</h3>
          <h2>Address</h2>
          <h3>{theReservation.Venue.address}</h3>
        </div>
      </animated.div>
    </Card>
  );
};

const Venue = ({ theVenue }) => {
  return (
    <div>
      <div>
        <h3>{theVenue.address}</h3>
      </div>
    </div>
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
  const currentVenue = useSelector((fullReduxState) => {
    return fullReduxState.venues.venues;
  });

  // With an empty array:
  // do this once when this component is first shown
  useEffect(() => {
    // Request to the server.
    dispatch(fetchReservation(loggedInUser.id));
    dispatch(fetchVenues(loggedInUser.id));
    dispatch(getCurrentProfile(loggedInUser.id)); // This is the id that's passed into the route
  }, [dispatch, loggedInUser]);
  // useEffect(() => {
  //   // dispatch(getCurrentProfile(loggedInUser.id));
  //   console.log('fetching profile');
  // }, [dispatch, currentProfile]);
  const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })

  return (
    
    <animated.div style={props}>
      <h2></h2>
      <div>{loggedInUser && <h3>Welcome {loggedInUser.username}</h3>}</div>
      <br></br>
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
      <br></br>
      <h3>Reservations:</h3>
      <div>
        {currentReservation &&
          currentReservation.map((reservation) => {
            return <Reservation theReservation={reservation} />;
          })}
      </div>
      <br></br>
      {!currentVenue && (
        <>
        <h2>Become an Owner</h2>
        <h3>
          Upload a venue!
          <Link to="/new-venue">
            <br></br>
            <Button>here</Button>
          </Link>
        </h3>
        </>
      )}
      {currentVenue &&
        currentVenue.map((venue) => {
          return <Venue theVenue={venue} />;
        })}
    </animated.div>
  );
};

export default DashBoard;
