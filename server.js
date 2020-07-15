"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { handleClients } = require("./handlers/clientHandlers");
const { handleId } = require("./handlers/clientHandlers");
const { newClient } = require("./handlers/clientHandlers");
const { handleRemove } = require("./handlers/clientHandlers");
const { handleFour } = require("./handlers/clientHandlers");
const { hangId, hangWord, hangGuess } = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/clients", handleClients)
  .get("/clients/:id", handleId)
  .post("/clients", newClient)
  .delete("/clients/:id", handleRemove)
  .get("/hangman/word/:id", hangId)
  .get("/hangman/word", hangWord)
  .get("/hangman/guess/:id/:letter", hangGuess)
  .get("/*", handleFour)
  .listen(8000, () => console.log(`Listening on port 8000`));
