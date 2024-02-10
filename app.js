const http = require('http');

http.createServer(function(req, res){
	res.write("howdy I'm full snack engineer")
	res.end();
}).listen(3000);

console.log("Server is running.")
