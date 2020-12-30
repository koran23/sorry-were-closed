
import {Link} from "react-router-dom";

import {useSelector} from 'react-redux';

const Home = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    });
    
    return (
        <div>
            <div>
                {/* <img src={picture} /> */}
                <div>
                    <h1></h1>
                </div>
            </div>
            {loggedInUser && <h3>Welcome {loggedInUser.username}</h3>}
        </div>
    );
};

export default Home;