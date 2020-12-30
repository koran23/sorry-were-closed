import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


function CreateProfilePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [userId, setUserId] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');

//   if (sessionUser) return (
//     <Redirect to="/" />
//   );

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors([]);
    return dispatch(sessionActions.createProfile({ userId, bio, location }))
    //   .catch((res) => {
    //     if (res.data && res.data.errors) setErrors(res.data.errors);
    //   });
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {/* {errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
      </ul>
      <label>
        bio
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>
      <label>
        location
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateProfilePage;