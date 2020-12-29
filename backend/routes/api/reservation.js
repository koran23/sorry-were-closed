const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Reservation } = require("../../db/models");
const router = express.Router();



router.post(
  "/new-reservation",
  asyncHandler(async (req, res) => {
    const { 
        userId,
        venueId,
        startDate,
        endDate,
        total
     } = req.body;

    const reservation = await Reservation.create({ 
        userId,
        venueId,
        startDate,
        endDate,
        total
    })
    res.json(reservation);
  })
);

module.exports = router;