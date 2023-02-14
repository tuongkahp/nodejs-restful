const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config()

// config path
var path = require('path')
global._require = (path) => require(path.join(__dirname, path))

const app = express()
app.use('*', cors())

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.resolve('./public')))

app.get("/", (req, res) => {
	res.json({ message: "Welcome to demp app." })
})

// v2
require("./src/routes/v2/auth.routes")(app)
require("./src/routes/v2/user.routes")(app)
require("./src/routes/v2/software.routes")(app)
require("./src/routes/v2/file.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`)
})