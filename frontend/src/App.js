import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Container from "./styles/Container";
import VenuesPage from './components/VenuesPage';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';
import DashBoard from "./components/DashBoard";
import BookingForm from './components/BookingForm';
import CreateProfilePage from './components/CreateProfilePage'
import CreateVenuePage from './components/CreateVenue'
import EditProfilePage from "./components/EditProfilePage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
    <Container>
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/venue">
            <VenuesPage />
          </Route>
          <Route path="/new-venue">
            <CreateVenuePage />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>       
          <Route path="/new-profile">
            <CreateProfilePage />
          </Route>       
          <Route path="/book/:venueId">
            <BookingForm />
          </Route>       
          <Route path="/edit-profile/:userId">
            <EditProfilePage />
          </Route>       
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Container>
      )}
    </>
  );
}

export default App;
