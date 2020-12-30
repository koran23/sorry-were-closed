import { fetch } from '../../store/csrf';
import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { fetchAllVenues } from '../../store/venues';

const Venue = ({theVenue}) => {

    return (
        <div>
            <h3>{theVenue.address}</h3>
        </div>
    );

};

const VenuesPage = () => {
    const dispatch = useDispatch();

    const currentVenues = useSelector(fullReduxState => {
        return fullReduxState.venues;
    });

    // With an empty array: 
    // do this once when this component is first shown
    useEffect(async () => {
        // Request to the server.
        // const response = await fetch("/api/bands");
        // setBands(response.data.bands);
        dispatch(
            fetchAllVenues()
        );
    }, []);

    return (
        <div>
            <h2></h2>
            {!currentVenues && <h3>Loading...</h3>}
            {currentVenues && currentVenues.map(venue => {
                return <Venue theVenue={venue} />;
            })}
        </div>
    );
};

export default VenuesPage;