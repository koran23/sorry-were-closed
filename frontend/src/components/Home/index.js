import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVenues } from '../../store/venues';

const Home = () => {
    const venues = useSelector((state)=> state.venues);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVenues())
    },[])    

    return (
        <div className='home'>
            <h1>Welcome!</h1>
            <h3>Let's get sorted!</h3>
                    {/* {venues.map((venue => 
                        <tr key={venue.id}>
                            <td>{venue.id}</td>
                        </tr>
                    ))} */}
        </div>
    );
};

export default Home;