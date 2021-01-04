import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setVenue} from '../../store/venues';
import { useHistory } from "react-router-dom";
import Button from '../../styles/Button';
import { StyledAuth } from "../SignupFormPage";

function CreateVenuePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((store) => store.session.user);
  const [totalOccupacy, setTotalOccupacy] = useState(0);
  const [summary, setSummary] = useState("");
  const [address, setAddress] = useState("");
  const [typeOfVenue, setTypeOfVenue] = useState("");
  const [hasKitchen, setHasKitchen] = useState('');
  const [hasAirCon, setHasAirCon] = useState('');
  const [hasHeating, setHasHeating] = useState('');
  const [hasInternet, setHasInternet] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ownerId: loggedInUser.id,
      totalOccupacy,
      summary,
      address,
      typeOfVenue,
      hasKitchen,
      hasAirCon,
      hasHeating,
      hasInternet,
      pricePerDay,
    };

    dispatch(setVenue(payload));
    history.push(`/venue`);
  };

  return (
    <StyledAuth>
    <h2></h2>
    <form onSubmit={onSubmit}>
        <div>
            <label>Total Occupacy</label>
            <input
            id='totalOccupacy'
            type='number'
            value={totalOccupacy}
            onChange={(e) => setTotalOccupacy(e.target.value)}
            placeholder='totalOccupacy'
            />
        </div>
        <div>
            <label>Summary</label>
            <input
            id='summary'
            type='text'
             value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder='summary'
            />
        </div>
        <div>
            <label>Address</label>
            <input
            id='address'
            type='text'
             value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='address'
            />
        </div>
        <div>
            <label>Type</label>
            <input
            id='type'
            type='text'
             value={typeOfVenue}
            onChange={(e) => setTypeOfVenue(e.target.value)}
            placeholder='type'
            />
        </div>
        <div>
            <label>This place has a kitchen:</label>
            <input
            id='hasKitchen'
            type='text'
             value={hasKitchen}
            onChange={(e) => setHasKitchen(e.target.value)}
            placeholder='hasKitchen'
            />
        </div>
        <div>
            <label>This place has air conditioning:</label>
            <input
            id='hasAirCon'
            type='text'
             value={hasAirCon}
            onChange={(e) => setHasAirCon(e.target.value)}
            placeholder='hasAirCon'
            />
        </div>
        <div>
            <label>This place has heating:</label>
            <input
            id='hasHeating'
            type='text'
             value={hasHeating}
            onChange={(e) => setHasHeating(e.target.value)}
            placeholder='hasHeating'
            />
        </div>
        <div>
            <label>This place has a internet:</label>
            <input
            id='hasInternet'
            type='text'
             value={hasInternet}
            onChange={(e) => setHasInternet(e.target.value)}
            placeholder='hasInternet'
            />
        </div>
        <div>
            <label>Price (One day)</label>
            <input
            id='pricePerDay'
            type='number'
             value={pricePerDay}
            onChange={(e) => setPricePerDay(e.target.value)}
            placeholder='pricePerDay'
            />
        </div>
        <Button type='submit'>Submit</Button>
    </form>
      {/* <div>Hello {venueId}</div> */}
      </StyledAuth>
  )
}

export default CreateVenuePage;
