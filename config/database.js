const mongoose= require("mongoose");
require("dotenv").config();

const dBconnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>
        console.log("Connection Established Successfully")
    ).catch((e)=>{
        console.error(e);
        console.log("Error in connecting to database");
        process.exit(1);
    })
}

module.exports= dBconnect;