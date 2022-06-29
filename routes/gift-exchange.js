const express = require("express"); //import again
const router = express.Router();
const GiftExchange = require("../models/gift-exchange");
const { BadRequestError } = require("../utils/errors");

// const names = {
//   courtney: 0,
// };
const names = {
  names: [],
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
  //y async
  const names = req.body?.name;
  console.log(names);

  res.send(req.query);
  res.send(names);
  try {
    res.send(GiftExchange.pairs(names));
    res.status(200);
  } catch (error) {
    next(BadRequestError());
  }
});
router.post("/traditional", async (req, res, next) => {
  const names = req.body?.name;

  res.send(req.query);
  res.send(GiftExchange.traditional(names));
  res.status(200);
});

module.exports = router; //allowing access to this
