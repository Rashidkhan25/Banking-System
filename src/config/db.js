const mongoose = require("mongoose")

function database() {
  mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
      console.log("Database Connected") 
    })
    .catch(err=>{
      console.log("Error Connecting DB")
      process.exit(1)
    })
}

module.exports = database