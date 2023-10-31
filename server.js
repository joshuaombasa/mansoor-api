const express = require("express")
const cors = require("cors")

const port = 3000

const app = express()
app.use(cors())
app.use(express.json())


const loginRoutes = require("./routes/login")
const vendorRoutes = require("./routes/vendor")
const equipmentRoutes = require("./routes/equipment")

app.use(`/api/vendor`, vendorRoutes)

app.use(`/api/equipment`, equipmentRoutes)

app.use('/api/login', loginRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})