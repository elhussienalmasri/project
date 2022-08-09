const router = require("express").Router();
const Address = require("../models/Address");


router.post("/", async (req, res) => {
  const newAddress= new Address(req.body);
  try {
    const savedAddress = await newAddress.save();
    res.status(200).json(savedAddress);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    const address = await Address.find();
    try {
     
      res.status(200).json(address);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;