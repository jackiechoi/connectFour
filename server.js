var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose');
// Set view engine folder
app.set('view engine', 'ejs')
app.set('view cache', false);

var connectionString = mongoose.connect("mongodb://jackie:1111@ds149800.mlab.com:49800/connectfour");

// Body parser for forms
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/public", express.static("public"));

//create a user schema
var userSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    email: {type: String, required: true},
    company: {type: String, required: true}
});

//create a user model
var userModel = mongoose.model("User", userSchema);

app.listen(process.env.PORT || 3001, function(){
	console.log("connectfour working!")
})