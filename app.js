const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const todoRoutes = require('./APIS/Routes/Todo');
const cors = require('cors');
const getConnection = require('./APIS/DB_connnection/MongoDB_connection')

const con = getConnection()
con.then((response) => {
    console.log("Connection established")
}).catch((error) => {
    console.log(error)
    console.log("error is error in created connection")
})

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next()
})


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use('/todo',todoRoutes)


module.exports = app;