import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setVenue} from '../../store/venues';
import { useHistory } from "react-router-dom";
import Button from '../../styles/Button';

function CreateVenuePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((store) => store.session.user);
  const [totalOccupacy, setTotalOccupacy] = useState(0);
  const [summary, setSummary] = useState("");
  const [address, setAddress] = useState("");
  const [hasKitchen, setHasKitchen] = useState(false);
  const [hasAirCon, setHasAirCon] = useState(false);
  const [hasHeating, setHasHeating] = useState(false);
  const [hasInternet, setHasInternet] = useState(false);
  const [pricePerDay, setPricePerDay] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ownerId: loggedInUser.id,
      totalOccupacy,
      summary,
      address,
      hasKitchen,
      hasAirCon,
      hasHeating,
      hasInternet,
      pricePerDay,
    };

    dispatch(setVenue(payload));
    history.push(`/dashboard`);
  };

  return (
    <>
    <h2></h2>
    <form onSubmit={onSubmit}>
        <div>
            <input
            id='totalOccupacy'
            type='number'
            value={totalOccupacy}
            onChange={(e) => setTotalOccupacy(e.target.value)}
            placeholder='totalOccupacy'
            />
        </div>
        <div>
            <input
            id='summary'
            type='text'
             value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder='summary'
            />
        </div>
        <div>
            <input
            id='address'
            type='text'
             value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='address'
            />
        </div>
        <div>
            <input
            id='hasKitchen'
            type='text'
             value={hasKitchen}
            onChange={(e) => setHasKitchen(e.target.value)}
            placeholder='hasKitchen'
            />
        </div>
        <div>
            <input
            id='hasAirCon'
            type='text'
             value={hasAirCon}
            onChange={(e) => setHasAirCon(e.target.value)}
            placeholder='hasAirCon'
            />
        </div>
        <div>
            <input
            id='hasHeating'
            type='text'
             value={hasHeating}
            onChange={(e) => setHasHeating(e.target.value)}
            placeholder='hasHeating'
            />
        </div>
        <div>
            <input
            id='hasInternet'
            type='text'
             value={hasInternet}
            onChange={(e) => setHasInternet(e.target.value)}
            placeholder='hasInternet'
            />
        </div>
        <div>
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
      </>
  )
}

export default CreateVenuePage;
