import knex from 'knex';
import mySQLConfig from "../db/mySQL.js"
import sqliteConfig from "../db/sqlite.js"

const mySQLConnection = knex(mySQLConfig);
const sqliteConnection = knex(sqliteConfig);

// To create tables
const createTables = async () => {
    try {
        await mySQLConnection.schema.dropTableIfExists("prods");
        await mySQLConnection.schema.createTable("prods", (prodsTable) => {
            prodsTable.increments("id").primary();
            prodsTable.string("title", 50).notNullable();
            prodsTable.integer("price", 10).notNullable() ;
            prodsTable.string("thumbnail", 100).notNullable();
        });

        await sqliteConnection.schema.dropTableIfExists("messages");
        await sqliteConnection.schema.createTable("messages", (prodsTable) => {
            prodsTable.increments("id").primary();
            prodsTable.string("mail", 50).notNullable();
            prodsTable.dateTime("date", 6).notNullable() ;
            prodsTable.string("message", 280).notNullable();
        });

        mySQLConnection.destroy();
        sqliteConnection.destroy();
    } catch (e) {
        console.log(e);
        mySQLConnection.destroy();
        sqliteConnection.destroy()
    };
};

await createTables();