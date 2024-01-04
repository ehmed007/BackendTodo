const mongoose = require('mongoose')
require('dotenv').config()

// const uri = 'mongodb://your_username:your_password@your_host:your_port/your_database';
// const url = 'mongodb://localhost:27017/TODO_DB'
const url = process.env.DATABASE_URL

const getConnection = () => {
    return mongoose.connect(url)
}

module.exports = getConnection;
