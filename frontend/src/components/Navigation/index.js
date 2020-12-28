import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import styled from 'styled-components';
import Home from '../Home/index';

const Bar = styled.div`
background-color: gold;
`

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <Bar>
      <NavLink exact to="/">
        Home
      </NavLink>
      {isLoaded && sessionLinks}
    </Bar>
  );
}


export default Navigation;
