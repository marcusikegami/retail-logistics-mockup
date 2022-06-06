// import the Sequelize constructor from the library 
const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

// create connection to the database created in ./db/schema.sql, pass in .env variables (dont forget to create a .env file with DB_USERNAME=EX and DB_PASSWORD=EX with your respective mysql shell login.)
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL) 
} else {
 sequelize = new Sequelize('retail_logistics_mockup', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
     host: 'localhost',
     dialect: 'mysql',
     port: 3306
 });
}

module.exports = sequelize;