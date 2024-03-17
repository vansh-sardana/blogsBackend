const express= require("express");
const dBconnect = require("./config/database");
require("dotenv").config();
const PORT= process.env.PORT || 3000;
const app= express();
app.use(express.json());

const routes= require("./routes/blog");

app.use("/api/v1", routes);

dBconnect();


app.listen(PORT, ()=>{
    console.log(`I am listening at PORT ${PORT}`);
})

app.get('/', (req,res)=>{
    res.send("<h1>Home</h1>")
});