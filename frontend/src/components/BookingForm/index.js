import {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

const BookingForm = () => {
    const { venueId } = useParams();
    return (
    <div>
        Hello {venueId}
    </div>
    )
};

export default BookingForm;