import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Button from "../../styles/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import EditProfilePage from '../EditProfilePage/index';

function EditProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    // document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const edit = (e) => {
    e.preventDefault();
    history.push('/edit-profile/${loggedInUser.id}');
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        Edit
      </button>
      {showMenu && (
        <EditProfilePage/>
      )}
    </>
  );
}

export default EditProfileButton;
