require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");

app.use(cors());

const port = process.env.PORT || 3000;

app.use("/api/", require("./routes"));

app.listen(port, () => {
  console.log("Tu app esta lista por http://localhost:" + port);
});

dbConnect();
