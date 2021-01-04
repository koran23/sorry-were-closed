import { useEffect, useState } from "react";
import Card from '../../styles/card'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVenues } from "../../store/venues";
import Button from "../../styles/Button";
import { useHistory, useParams } from "react-router-dom";
import {useSpring, animated} from 'react-spring'


 

const VenuesPage = () => {
const history = useHistory();
const [search, setSearch] = useState('')


const bookVenue = (venueId) => {
      history.push(`/book/${venueId}`);
  }

  const Venue = ({ theVenue }) => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    })
    return (
      <Card>
      <animated.div style={props} className="card">
        <div className='container'>
          <label>Place of Business:</label>
        <h3>{theVenue.name}</h3>
        <br></br>
        <label>Address:</label>
        <h3>{theVenue.address}</h3>
        <br></br>
        <label>About this Venue:</label>
        <h3>{theVenue.summary}</h3>
        <br></br>
        <label>Best Suited:</label>
        <h3>{theVenue.typeOfVenue}</h3>
        <Button onClick={() => {bookVenue(theVenue.id)} }>Book</Button>
      </div>
      </animated.div>
      </Card>
    );
  };

  useEffect(() => {
      // stuff here
    });

  const dispatch = useDispatch();

  const currentVenues = useSelector((fullReduxState) => {
    return fullReduxState.venues.venues;
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
      <h2>Where would you like to throw your event?</h2>
      <br></br>
      {!currentVenues && <h3>Loading...</h3>}
      {currentVenues &&
        currentVenues.map((venue) => {
          return <Venue theVenue={venue} />
        })}
    </div>
  );
};

export default VenuesPage;
