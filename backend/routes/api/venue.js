const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Profile } = require("../../db/models");
const router = express.Router();


// @route  GET api/profile/me
// @desc   Test route
// @access Public
router.get(
  "/me",
  asyncHandler(async (req, res) => {

    const userId = req.params.id;

    const profile = await Profile.findOne({ userId });

    if(!profile) {
        res.status(400).json({ msg: 'There is no profile for this user' });
    }

    return res.json(profile);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, bio, location } = req.body;

    const profile = await Profile.create({ userId, bio, location })
    res.json(profile);
  })
);

router.put(
  '/:userId',
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const profile = await Profile.findOne(userId);
    // if (userId !== profile.userId) {
    //   const err = new Error('Unauthorized');
    //   err.status = 401;
    //   err.message = 'You are not authorized to edit this profile.';
    //   err.title = 'Unauthorized';
    //   throw err;
    // }
    if (profile) {
      await profile.update({ 
          bio: req.body.bio,
          location: req.body.location 
        });
      res.json({ profile });
    } else {
      res.status(400).json({msg: 'no profile'})
    }
  })
);

module.exports = router;