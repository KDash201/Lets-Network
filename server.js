const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/lets-network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(routes);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
