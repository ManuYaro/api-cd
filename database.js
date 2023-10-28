const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "compact discs", //name of the database
    "root", //username
    "", // password
    {
        dialect: "mysql",
        host: 'localhost',
        port:3306, //port od mysql
    }
)

const connectToDb = async()=>
{
    try
    {
        // tries to connect to the database
        await sequelize.authenticate()
        console.log("Successfully connected to the database")
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = {sequelize, connectToDb}