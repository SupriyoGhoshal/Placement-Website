require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const port = process.env.PORT || 3800;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));


app.listen(port, (req,res)=>{
    console.log(`🚀 Server running on http://localhost:${port}/`)
})

app.get("/", (req,res)=>{
    res.send("Placement server is created.")
})

