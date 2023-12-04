const express = require('express');
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();



app.get('/api', (req, res) => {
    res.json({ "message": ['Hello from server!',"LOL it works"] });
});


const PORT = process.env.PORT || 5000;


const CONNECTION_URL =
  "mongodb+srv://" +
  process.env.MONGO_ADMIN +
  ":" +
  process.env.MONGO_PASSWORD +
  "@cluster0.fxllxhq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));



