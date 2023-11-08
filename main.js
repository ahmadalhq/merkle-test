const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const db = require("./db/database.js")
const GuestsController = require("./controller/guests.js")

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Connected to port ${port}`)
})

app.get("/", (req, res, next) => {
  res.json({
    "message":"Ok"
  })
});

app.get("/api/note", GuestsController.findAllNote);

app.post("/api/guest", GuestsController.postNote);

