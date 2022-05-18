const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
var db = require('./db');
const encoder =bodyParser.urlencoded();
app.use(express.json());


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/Home.html')) ;
  });
app.get('/studenthome', function(req, res) {
    if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});
 

app.post('/studentlogin', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM loginuser WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});
// when login is success
app.get("/welcome",function(req,res){
    res.sendFile(path.join(__dirname, "public/student.html"));
})
  

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//const PORT = process.env.PORT || 4000;

//app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
app.listen(5000);
