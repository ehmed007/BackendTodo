const http1 = require("http")
const app = require("./app")
require('dotenv').config()

const port = process.env.PORT || 8080;
const server = http1.createServer(app);   

server.listen(port,(response) => { 
    console.log(`server started at PORT ${port}!`)
})