const port = 8989;
 const http = require("http");
 const httpStatus = require("http-status-codes");
 const app = http.createServer((request, response) => {
     console.log("Received");
     response.writeHead(httpStatus.OK, {
         "Content-Type": "text/html",
     });
     var day = new Date();
     let responseMessage = `<h1> ${day} </h1>`;
     response.write(responseMessage);
     response.end();
     console.log(`Sent a response: ${responseMessage}`);

 });

 app.listen(port);
 console.log("server is listening");