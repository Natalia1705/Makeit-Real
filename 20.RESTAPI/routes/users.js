const router = require("express").Router();
const User = require("../models/Users");

router.post("/", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
