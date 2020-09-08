require("@babel/register");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../.env" });

const dbconfig = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: process.env.ENABLE_SSL
  },
  migrations: {
    directory: "./migrations",
    table: "migrations",
  },
};

module.exports = dbconfig;
