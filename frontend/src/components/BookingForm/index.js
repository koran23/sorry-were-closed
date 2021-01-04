import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Button from '../../styles/Button'
import { createReservation } from '../../store/reservations'

const BookingForm = () => {
  const { venueId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((store) => store.session.user)
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const onSubmit = (e) => {
      e.preventDefault();

    const payload = {
      userId: loggedInUser.id,
      venueId,
      startDate: start,
      endDate: end
    };

    dispatch(createReservation(payload));
    history.push(`/venue`);
    
  //   let createdReservation;
  //   if (createdReservation) {
  //     history.push(`/`);
  // }
}
  return (
    <>
    <h2>Book this Venue!</h2>
    <form onSubmit={onSubmit}>
        <div>
            <input
            id='start-date'
            type='text'
            value={start}
            onChange={(e) => setStart(e.target.value)}
            placeholder='start'
            />
        </div>
        <div>
            <input
            id='end-date'
            type='text'
             value={end}
            onChange={(e) => setEnd(e.target.value)}
            placeholder='end'
            />
        </div>
        <Button type='submit'>Submit</Button>
    </form>
      {/* <div>Hello {venueId}</div> */}
      </>
  )
};

export default BookingForm;
