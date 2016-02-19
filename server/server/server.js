var express = require('express');
var app = express();



app.get('/', function(request, response) {
    response.write("<h1>Welcome to our amazing website</h1>");
    response.end();
});

app.get('/about', function(request, response) {
    response.write("<h1>About Us!</h1>");
    response.end();
});

app.get('/api/users', function(request, response) {
    response.json({ "message": "We could display a list of users here for an api" });
    response.end();
});

app.post('/api/user/', function(request, response) {
    response.json({ "message": "An example post request" });
    response.end();
});

app.delete('/api/user/:id', function(request, response) {
    response.json({ "message": "An example delete request for a certain user" });
    response.end();
});

app.listen(3000);
console.log("Visit your web page at http://localhost:3000");