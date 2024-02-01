const express = require("express");
const app = express();

const bodyParser=require("body-parser");

const mongoose = require("mongoose");
const cors=require("cors");
require("dotenv").config();

const authRoute = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use("/",authRoute);

app.use((error,req,res)=>{

  
  console.log("_______hello");
  res.status(500).json({ success: false, message: error.message });
})

const PORT = process.env.PORT || 1200;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started at port no: ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));
