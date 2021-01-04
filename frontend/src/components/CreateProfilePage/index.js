import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createProfile} from '../../store/profile';
import { useHistory } from "react-router-dom";
import Button from '../../styles/Button';
import { StyledAuth } from "../SignupFormPage";

function CreateProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((store) => store.session.user);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: loggedInUser.id,
      bio,
      location,
    };

    dispatch(createProfile(payload));
    history.push(`/dashboard`);
  };

  useEffect(() => {
    
  })

  return (
    <StyledAuth>
    <h2></h2>
    <form onSubmit={onSubmit}>
        <div>
            <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder='bio'
            rows={3}
            cols={25}
            ></textarea>
        </div>
        <div>
            <input
            id='location'
            type='text'
             value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='location'
            />
        </div>
        <Button type='submit'>Submit</Button>
    </form>
      {/* <div>Hello {venueId}</div> */}
      </StyledAuth>
  )
}

export default CreateProfilePage;
