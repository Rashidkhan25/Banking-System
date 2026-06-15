require("dotenv").config()

const app = require("./src/app")
const database = require("./src/config/db")
const PORT = 3000

database()

app.listen(PORT, ()=> {
    console.log(`Server is running on Port ${PORT}`)
})

