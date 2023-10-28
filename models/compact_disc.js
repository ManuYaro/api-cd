const {sequelize} = require('../database')
const {DataTypes} = require('sequelize')

const CompactDisc = sequelize.define("CompactDisc",
    {
        id:
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:
        {
            type: DataTypes.STRING(50),
        },
        author:
        {
            type: DataTypes.STRING(50),
        },
        album:
        {
            type: DataTypes.STRING(50),
        }
    }
)

module.exports = CompactDisc