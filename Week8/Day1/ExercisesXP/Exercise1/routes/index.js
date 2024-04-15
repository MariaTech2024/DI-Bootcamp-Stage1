const express = require('express');
//Create a new router instance
const router = express.Router();

//Define a route for the homepage ("/")
router.get("/", (req, res) => {
  res.status(200).json({ msg: "Homepage" });
});
//Define a route for the about page ("/about")
router.get("/about", (req, res) => {
  res.status(200).json({ msg: "About" });
});
//Export the router module so it can be used in other parts of the application
module.exports = router;