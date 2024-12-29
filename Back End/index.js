// let express = require("express")
// const {mongoose} = require("mongoose")
// require("dotenv").config()
// let app=express()
// let cors = require("cors")
// const { mainRoute } = require("./App/mainRoute")
// app.use(cors())
// app.use(mainRoute)


// mongoose.connect('mongodb://127.0.0.1:27017/${process.env.DBNAME}')
// .then((res)=>{
//     res.listen(process.env.PORT)
// })

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const { mainRoute } = require("./App/mainRoute");

const app = express();
app.use(express.json())
// Middleware
app.use(cors());
app.use(mainRoute);

//permission for folder image access
app.use("/uploads/category",express.static("uploads/category"))
app.use("/uploads/subCategory",express.static("uploads/subCategory"))


// Connect to MongoDB
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(process.env.PORT);
  })

