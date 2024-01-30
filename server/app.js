const express = require("express");

const app = express();
const PORT = process.env.PORT || 1200;

app.get("/", (req, res) => {
  res.send("Testing...");
});

app.listen(PORT, (result) => {
  console.log(`server is running on PORT ${PORT}`);
});
