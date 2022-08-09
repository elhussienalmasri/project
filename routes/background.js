const router = require("express").Router();
const Background = require("../models/Background");

// headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
router.post("/", async (req, res) => {
  const newBackground= new Background(req.body);
  try {
    
    const savedBackground = await newBackground.save();
    res.status(200).json(savedBackground);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    const back = await Background.find();
    try {
     
      res.status(200).json(back);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;