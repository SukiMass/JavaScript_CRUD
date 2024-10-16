const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotEnv = require("dotenv")
const route = require("./Routes/routes")



const app = express()

app.use(bodyParser.json())

dotEnv.config()

const PORT = process.env.PORT || 5000

const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error) => (console.error(error)))

app.use('/api/user', route)