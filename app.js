//import express from "express";
//import { Express } from "express";
const express = require("express");
const morgan = require("morgan"); //like imports
const giftEx = require("./routes/gift-exchange");
const { NotFoundError } = require("../utils/errors");

const app = express(); //inst
// app.use(cors());

//app.listen(3000, () => console.log("listening on port"));

app.use(morgan("tiny"));
app.use("/gift-exchange", giftEx); //mount
app.use(express.json());

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use("/", async (req, res, next, error) => {
  const status = error?.status || 500; //if err doesnt exist then
  const message = error?.message || "Something went wrong in the application";
  const error = { status, message };
  res.status(status).send(error);
});

module.exports = app;
