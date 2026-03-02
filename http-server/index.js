const http = require('http');

const handleAllRequests =(requestObject,responseObject)=>{
    console.log("A request was made to the server")
    console.log("hi, my server is working")
    // console.log(requestObject)
    const url = requestObject.url
    if(url === "/"){
        responseObject.write("<h1> Welcome to the Home Page </h1>")
    }else if(url === "/login"){
        responseObject.write("<h1> Welcome to the login Page </h1>")
    }else{
        responseObject.write("<h1> Page Not Found </h1>")
    }
    responseObject.end('<h1> Welcome to Mr Amoah Kingdom </h1>')
}

const server = http.createServer(handleAllRequests)

server.listen(4000,"127.0.0.1",()=>{console.log("My Server is listening on port 4000")})