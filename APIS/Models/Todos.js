const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({   
    _id:mongoose.Schema.Types.ObjectId,
    todoDescription:String,
    createdAt:Date,
    completed:Boolean
})

module.exports = mongoose.model('Todo',todoSchema)
