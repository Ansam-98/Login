const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes/api')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/api',api)

app.get('/',function(req,res){
    res.send('Hello from server')
})


app.listen(3000 , function(){
    
    console.log("It's really running in port 3000");
});
