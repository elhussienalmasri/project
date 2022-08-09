const router = require("express").Router();
const User = require("../models/User");
const Contact = require("../models/Contact");

//CREATE Message
router.post("/", async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    const savedContact = await newContact.save();
    res.status(200).json(savedContact);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
