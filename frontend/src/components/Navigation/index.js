import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import styled from 'styled-components';
import DashBoard from '../DashBoard/index';

const Bar = styled.div`
position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.grey};
  z-index: 99;
  padding: 0.7rem 1.5rem;

  input {
    width: 500px;
  }

  .toggle-navhandler {
    display: none;
  }

  .logo span {
    position: relative;
    top: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    position: relative;
    top: 2px;
  }

  li svg {
    margin-right: 1.7rem;
    position: relative;
    top: 3px;
  }

  img {
    position: relative;
    top: 3px;
  }

  @media screen and (max-width: 1093px) {
    .toggle-navhandler {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    input {
      width: 400px;
    }
  }

  @media screen and (max-width: 850px) {
    input {
      width: 280px;
    }
  }

  @media screen and (max-width: 500px) {
    .toggle-navhandler {
      display: none;
    }

    li svg {
      width: 30px;
      height: 30px;
      margin-right: 1.7rem;
      position: relative;
      top: 0px;
    }
  }
`;

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = ( 
    <>
      {/* <NavLink exact to="/profile/me">
        Profile
      </NavLink> */}
      <NavLink exact to="/venue">
        Venues
      </NavLink>
      <NavLink exact to="/dashboard">
        DashBoard
      </NavLink>
    <ProfileButton user={sessionUser} /> 
    </>
    );
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
