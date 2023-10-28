const express = require('express');
const apiRoutes = require("./routes");
const {sequelize, connectToDb} = require('./database');
const bodyParser  = require('body-parser')
const cors = require("cors");
var ip = require("ip");
//get the local address
var address =  ip.address();

// instance of express server
const app = express();

//port number
const PORT = 3333;

//enables Cross domain sharing files
app.use(cors());

app.use(bodyParser.json())

//register routers
app.use("/api", apiRoutes)

app.get("/", (request, response)=>
{
    //what to return when the response is ok
    response.status(200).json({message: "Hello world"})
})


//start the server and listen to a certain port
app.listen(PORT, address, async()=>
{
    console.log("----- Your IP address is: " + address)
    //launches the connection to the database
    await connectToDb();

})


