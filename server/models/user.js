const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String,
    appname:String,
    title:String,
   experiance:String,
   select:String,
   years:String,
   select1:String
})

module.exports = mongoose.model('user',userSchema,'users')