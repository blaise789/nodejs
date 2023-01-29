const http = require('http'); // Loads the http module
//const hostname='127.0.0.1';
http.createServer((request, response) => {
 // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
 response.writeHead(200, {
 'Content-Type': 'text/html'
 });
 
 // 2. Write the announced text to the body of the page
 //response.write("<head><link rel=")
 response.write('<p> Hello, World!</p>');
 response.write('<p>Hello, World!</p>');

 // 3. Tell the server that all of the response headers and body have been sent
 response.end();
}).listen(1331); // 4. Tells the server what port to be on