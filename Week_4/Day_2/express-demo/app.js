var express = require('express');
var app = express();

app.get(['/apple', '/ale'], function(request, response) {
console.log("done");
response.status(200).send(`Apple or Ale?`);
});

app.get('/wh(o+)(a+)', function(request, response) {
console.log("done");
response.status(200).send(`I know, Right?`);
});

app.get('/users/:firstName/:lastName', function(request, response) {
console.log("done");
response.status(200).send(`Hello ${request.params.firstName} ${request.params.lastName}`);
});


app.get('/reverse/:word', function(request, response) {
console.log("done");
let reverseAWord = (myStr) => {
	let result = "";
	for (let i = myStr.length - 1; i >= 0; i--){
		result += myStr[i];
	}
	return result;
}
response.status(200).send('Word Reversed');
});

app.get('*', function(request, response) {
console.log("done");
response.status(404).send(`page not found`);
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});