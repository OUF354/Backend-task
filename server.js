const express = require('express');
const mongoose = require('mongoose');


let app = express();

//connect server to mongo server ==> local database 
mongoose.connect("mongodb://localhost:27017/students", (err)=> {
    if(!err) console.log('DB now is connected');
    else console.log(err)
})

//schema

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    phone : String,
    address : String
})

//convert schema to model(class)
let studentmodel = new mongoose.model("students" ,studentSchema );

let newuser = studentmodel({
    name : "Ahmed ELsayed",
    age : 25 ,
    phone : "01025489452",
    address : "egypt : portsaid"
    
}).save();

let ahmed = studentmodel({
    name : "mohamed",
    age : 24,
    phone : "102488420054",
    address : " egypt : ismaelia"
}).save();

let mohamed = studentmodel({
    name : "mohamed",
    age : 25,
    phone : "01245896571",
    address : " egypt : cairo"
}).save();

const courseSchema = new mongoose.Schema({
    name : String,
    description : String
})


let coursemodel = new mongoose.model("courses" ,courseSchema );

let firstcourse = coursemodel({
    name : "English" ,
    description : "Theoretical subject"
}).save();

let secondcourse = coursemodel({
    name : "Backend Track" ,
    description : "practical subject"
}).save();


//end point fetch all users from database
app.get('/students', async (req,res)=>{
    let allStudents = await studentmodel.find();
    res.status(200);
    console.log(allStudents.length)    
    res.json(allStudents);
})


app.get('/courses', async (req,res)=>{
    let allCourses = await coursemodel.find();
    res.status(200);
    console.log(allCourses.length)    
    res.json(allCourses);
})


app.get('', async (req,res)=>{
    res.send("salam ybn el3abeta")

})


app.listen(3000, function(){
    console.log('server now is opened')
})