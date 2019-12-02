const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//set the database url as a var and connect to it with mongoose
const mongoDB = "mongodb+srv://admin:admin@cluster0-etxy5.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {useNewUrlParser:true});

//Allow the app to access the local server
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

//parse application/json
app.use(bodyParser.json())
//add a schema

const Schema = mongoose.Schema;

//store data in both schema
const TeamSchema = new Schema({
        name: String,
        stadium:  String,
        location: String,
        logo:''
})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/F1', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

//Create model for both to add and delete data from database in a collection
const TeamModel = mongoose.model('team',TeamSchema);

//get data from collections in database
app.get('/api/team', (req, res) =>{
    
    TeamModel.find((error,data)=>{
    res.json({team:data});
    })

})
//Get data and edit the stored data
app.get('/api/team/:id', (req, res)=>{
    console.log(req.params.id);

    TeamModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.put('/api/team/:id',(req, res) =>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    MovieModel.findByIdAndUpdate(req.params.id, 
        req.body, 
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})
//POST to send name, year and url of poster 
//Use MovieModel to send data to database and create a collection to store that data
app.post('/api/team',(req,res)=>{
    console.log('Team Recieved')
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.location);
    console.log(req.body.stadium);
    console.log(req.body.logo);
    TeamModel.create({
        name:req.body.name,
        location:req.body.location,
        stadium:req.body.stadium,
        logo:req.body.logo

    });
    res.json('post recieved!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))