import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { getCurrentProfile } from '../../store/profile';

const Profile = ({theProfile}) => {

    return (
        <div>
            <h3>{theProfile.location}</h3>
        </div>
    );

};

const DashBoard = () => {
    const dispatch = useDispatch();

    const loggedInUser = useSelector(state => {
        return state.session.user;
    });

    console.log(loggedInUser);

    const currentProfile = useSelector(fullReduxState => {
        return fullReduxState.profile.profile;
    });

     console.log(currentProfile);
    // With an empty array: 
    // do this once when this component is first shown
    useEffect(async () => {
        // Request to the server.
        // const response = await fetch("/api/bands");
        // setBands(response.data.bands);
        dispatch(
            getCurrentProfile()
        );
    }, []);

    return (
        <div>
            <h2>Content</h2>
            <div>
                {loggedInUser && <h3>Welcome {loggedInUser.username}</h3>}
            </div>
            {!currentProfile && <h3>Loading...</h3>}
            {currentProfile &&  <Profile theProfile={currentProfile} />}                 
        </div>
    );
};

export default DashBoard;

