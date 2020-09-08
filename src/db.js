import knex from "knex";

import  dbconfig  from "./knexfile";

const connection = knex(dbconfig);

export default connection;
