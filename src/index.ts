import { createServer } from 'http';

createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
    console.log("hello");
    
}).listen(8888);