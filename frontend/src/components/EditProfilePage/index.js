import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createProfile, editProfile} from '../../store/profile';
import { useHistory } from "react-router-dom";
import Button from '../../styles/Button';
import { StyledAuth } from "../SignupFormPage";

function EditProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((store) => store.session.user);
  const profile = useSelector((store) => store.session.profile);

  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const updateBio = (e) => setBio(e.target.value);
  const updateLocation = (e) => setLocation(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
        ...profile,
      userId: loggedInUser.id,
      bio,
      location,
    };

    dispatch(editProfile(loggedInUser.id, payload));
    // history.push(`/dashboard`);
  };


  return (
    <StyledAuth>
    <h2></h2>
    <form onSubmit={onSubmit}>
        <div>
            <input
            id='bio'
            type='text'
            value={bio}
            onChange={updateBio}
            placeholder='bio'
            />
        </div>
        <div>
            <input
            id='location'
            type='text'
             value={location}
            onChange={updateLocation}
            placeholder='location'
            />
        </div>
        <Button type='submit'>Update</Button>
    </form>
      {/* <div>Hello {venueId}</div> */}
      </StyledAuth>
  )
}

export default EditProfilePage;