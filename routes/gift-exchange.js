const express = require("express"); //import again
const router = express.Router();

const names = {
  courtney: 0,
};
// const namess = ["me", "you", "them", "us", "her", "him", "they", "y'all"];

// GiftExchange.pairs(names);
// ==> GiftExchange.pairs returns
// [
//   ["they", "us"],
//   ["me", "her"],
//   ["y'all", "you"],
//   ["them", "him"],
// ]

router.post("/pairs", async (req, res, next) => {
  res.status(200);
  res.send(req.query);
});
router.post("/traditional", async (req, res, next) => {
  res.status(200);
  res.send(req.query);
});

module.exports = router; //allowing access to this
