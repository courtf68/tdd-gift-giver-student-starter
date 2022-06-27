const express = require("express"); //import again
const router = express.Router();

const names = {
  courtney: 0,
  lexis: 0,
  alexa: 0,
};

router.post("/pairs", "/traditional", async (req, res, next) => {
  res.status(200).json(names);
});

module.exports = router; //allowing access to this
