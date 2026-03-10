// Import the built-in HTTP module from Node.js
// const http = require('http');
// creating an express server
const express = require('express');
const server = express();

server.get("/",(req,res)=>{
    res.send("<h1> Welcome to the Home Page </h1>")
})

server.get("/login",(req,res)=>{
    res.send("<h1> Welcome to the login Page </h1>")
})
server.put("/login",(req,res)=>{
    res.send("<h1> PUT ABOUT </h1>")
})


// This function handles every request made to the server
// requestObject contains details about the request (URL, method, headers)
// responseObject is used to send a response back to the browser
// const handleAllRequests =(req,res)=>{

//     // Log messages to confirm the server received a request
//     console.log("A request was made to the server")
//     console.log("hi, my server is working")
//    // Get the URL the user is visiting
//     const url = req.url
//      // Check which route the user is requesting
//     if(url === "/"){
//         res.send("<h1> Welcome to the Home Page </h1>")
//     }else if(url === "/login"){
//         res.send("<h1> Welcome to the login Page </h1>")
//     }else{
//         res.status(404).send("<h1> Page Not Found </h1>")
//     }
//      // End the response and send final message to the browser
//     // Every response must end with responseObject.end()
//     res.end();
// }
// Create the server and pass in the request handler function

server.use((req, res) => {
res.status(404).send("<h1>Page Not Found</h1>");
});
server.listen(4000,"127.0.0.1",()=>{console.log("My Server is listening on port 4000")})