//import express from "express";
//import { Express } from "express";
const express = require("express");
const morgan = require("morgan"); //like imports
const giftEx = require("./routes/gift-exchange");

const app = express(); //inst

//app.listen(3000, () => console.log("listening on port"));

app.use(morgan("tiny"));
app.use("/gift-exchange", giftEx);
app.use(express.json());

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

module.exports = app;
