const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRoute = require("./routes/auth");
const noteRoute = require("./routes/note");
const subCategoryRoute = require("./routes/subCategory");

app.use("/auth", authRoute);
app.use("/note", noteRoute);
app.use(subCategoryRoute);

app.get('/' , (req,res)=>{
  res.send('welcome')
})

app.use((error, req, res, next) => {
  res
    .status(500)
    .json({ success: false, message: error.message || "something went wrong" });
});

const PORT =1200;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started at port no: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
