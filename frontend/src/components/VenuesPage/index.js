import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllVenues } from "../../store/venues";
import Button from "../../styles/Button";
import { useHistory, useParams } from "react-router-dom";
  

const VenuesPage = () => {
const history = useHistory();


const bookVenue = (venueId) => {
      history.push(`/book/${venueId}`);
  }

  const Venue = ({ theVenue }) => {
    return (
      <div>
        <h3>{theVenue.address}</h3>
        <Button onClick={() => {bookVenue(theVenue.id)} }>Book</Button>
      </div>
    );
  };

  useEffect(() => {
      // stuff here
    });

  const dispatch = useDispatch();

  const currentVenues = useSelector((fullReduxState) => {
    return fullReduxState.venues;
  });

  // With an empty array:
  // do this once when this component is first shown
  useEffect(async () => {
    // Request to the server.
    // const response = await fetch("/api/bands");
    // setBands(response.data.bands);
    dispatch(fetchAllVenues());
  }, []);

  return (
    <div>
      <h2></h2>
      {!currentVenues && <h3>Loading...</h3>}
      {currentVenues &&
        currentVenues.map((venue) => {
          return <Venue theVenue={venue} />;
        })}
    </div>
  );
};

export default VenuesPage;
