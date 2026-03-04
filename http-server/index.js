// Import the built-in HTTP module from Node.js
const http = require('http');

// This function handles every request made to the server
// requestObject contains details about the request (URL, method, headers)
// responseObject is used to send a response back to the browser
const handleAllRequests =(requestObject,responseObject)=>{

    // Log messages to confirm the server received a request
    console.log("A request was made to the server")
    console.log("hi, my server is working")
   // Get the URL the user is visiting
    const url = requestObject.url
     // Check which route the user is requesting
    if(url === "/"){
        responseObject.write("<h1> Welcome to the Home Page </h1>")
    }else if(url === "/login"){
        responseObject.write("<h1> Welcome to the login Page </h1>")
    }else{
        responseObject.write("<h1> Page Not Found </h1>")
    }
     // End the response and send final message to the browser
    // Every response must end with responseObject.end()
    responseObject.end('<h1> Welcome to Mr Amoah Kingdom </h1>')
}
// Create the server and pass in the request handler function
const server = http.createServer(handleAllRequests)

server.listen(4000,"127.0.0.1",()=>{console.log("My Server is listening on port 4000")})