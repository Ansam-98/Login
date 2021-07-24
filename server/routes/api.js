const express = require('express')
const router =express.Router()
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const User = require('../models/user')
const Admin = require('../models/admin')
const db = mongoose.connect('mongodb://localhost/eventsdb' , {useNewUrlParser: true,useUnifiedTopology: true })


router.get('/',(req,res) => {
    res.send('Form API route')
})

router.post('/register',(req,res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser) =>{
        if(error){
            console.log(error)
        } else{
let payload = {subject: registeredUser._id}
let token = jwt.sign(payload,'secretkey')
            res.status(200).send({token})
        }
    })

})

router.post('/login',(req,res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) =>{
        if(error){
            console.log(error)
        } else{
            if (!user){
                res.status(401).send('Invalid email')
            } else
                if (user.password !== userData.password){
                    res.status(401).send('Invalid Password')
                } else{
        let payload = {subject: user._id}
let token = jwt.sign(payload,'secretkey')
                    res.status(200).send({token})
                }
            
        }
    })

})
router.get('/events', (req,res) => {
    let events =[
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        },
        {
            "_id":"2",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        },
        {
            "_id":"3",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        },
        {
            "_id":"4",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        },
        {
            "_id":"5",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        }
    ]
    res.json(events)
})

router.get('/special', (req,res) => {
    let events =[
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        },
        {
            "_id":"2",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        },
        {
            "_id":"3",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        },
        {
            "_id":"4",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        },
        {
            "_id":"5",
            "name":"Auto Expo",
            "description":"lorem ipsum"
        }
    ]
    res.json(events)
})




router.get("/users",function(req,res){
    console.log("Get requist for all users");
    User.find({})
    .exec(function(err,users){
if(err){
    console.log("Error retriving user");
}else{
    res.json(users);
}
    });
});





router.post('/registeradmin',(req,res) =>{
    let adminData = req.body
    let registeradmin = new Admin(adminData)
    registeradmin.save((error,registeredAdmin) =>{
        if(error){
            console.log(error)
        } else{
            let payload = {subject: registeredAdmin._id}
let token = jwt.sign(payload,'secretkey')
            res.status(200).send({token})
        }
    })

})

router.post('/admin',(req,res) => {
    let adminData = req.body

    Admin.findOne({email: adminData.email}, (error, admin) =>{
        if(error){
            console.log(error)
        } else{
            if (!admin){
                res.status(401).send('Invalid email')
            } else
                if (admin.password !== adminData.password){
                    res.status(401).send('Invalid Password')
                } else{
                    let payload = {subject: admin._id}
let token = jwt.sign(payload,'secretkey')
                    res.status(200).send({token})
                }
            
        }
    })

})


router.get("/admin",function(req,res){
    console.log("Get requist for all admins");
    Admin.find({})
    .exec(function(err,admins){
if(err){
    console.log("Error retriving user");
}else{
    res.json(admins);
}
    });
});

module.exports = router