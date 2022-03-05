const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/letsnetwork",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("debug", true);

app.use(routes);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
