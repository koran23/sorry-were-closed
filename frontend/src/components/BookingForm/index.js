import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Button from '../../styles/Button'
import { createReservation } from '../../store/reservations'

const BookingForm = () => {
  const { venueId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const onSubmit = (e) => {
      e.preventDefault();

    const payload = {
      start,
      end
    };

    dispatch(createReservation(payload));
    
    let createdReservation;
    if (createdReservation) {
      history.push(`/`);
  }
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
            onChange={setStart}
            placeholder='start'
            />
        </div>
        <div>
            <input
            id='end-date'
            type='text'
             value={end}
            onChange={setEnd}
            placeholder='end'
            />
        </div>
        <Button type='submit'>Submit</Button>
    </form>
      <div>Hello {venueId}</div>
      </>
  )
};

export default BookingForm;
