const Date date1; // initialize using default constructor
const Date date2(2020, 10, 16); // initialize using parameterized constructor
const Date date3 { 2020, 10, 16 }; // initialize using parameterized constructor (C++11)
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
console.log(Date date1 date2 date3);
