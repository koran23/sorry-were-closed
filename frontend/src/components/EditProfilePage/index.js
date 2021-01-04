import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, editProfile } from "../../store/profile";
import { useHistory } from "react-router-dom";
import Button from "../../styles/Button";
import { StyledAuth } from "../SignupFormPage";

function EditProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const loggedInUser = useSelector((store) => store.session.user);
  const profile = useSelector((store) => store.session.profile);

  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const updateBio = (e) => setBio(e.target.value);
  const updateLocation = (e) => setLocation(e.target.value);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

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
          <textarea
            value={bio}
            onChange={updateBio}
            placeholder="bio"
            rows={3}
            cols={25}
          ></textarea>
        </div>
        <div>
          <input
            id="location"
            type="text"
            value={location}
            onChange={updateLocation}
            placeholder="location"
          />
        </div>
        <Button onClick={openMenu} type="submit">
          Update
        </Button>
        {showMenu && <h3>Profile Updated!</h3>}
      </form>
      {/* <div>Hello {venueId}</div> */}
    </StyledAuth>
  );
}

export default EditProfilePage;
