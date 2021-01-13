const http = require('http');

const localhost="localhost";
const port="3000";

const server = http.createServer((req,res)=>{

	res.statusCode=200;
	res.setHeader("content-type","text/html");
	res.end("<html><body><h1>connection successfully established</h1></body></html>");

});

server.listen(port,localhost, ()=>{
	console.log(`server is running on ${port} and hostname is ${localhost}`);
})