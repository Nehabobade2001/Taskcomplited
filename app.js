require ("dotenv").config();
const express = require("express");
const app = express ();
const mongoose = require("mongoose");
require ("./db/conn.js")
const cors = require("cors");
 const users = require ("./models/userSchema.js")
 const router = require("./routes/router");

app.use(cors());
app.use(express.json());
 

const port =8000


app.use(router);

app.listen(port,()=>{
    console.log(`server start port number ${port}`)
})

