const client = require('../client');

async function dropTables() {
    console.log('Hey man, Dropping All Tables...');
    try {

        // drop all tables, in the correct order
        await client.query(`
        DROP TABLE IF EXISTS orderInfo;
        DROP TABLE IF EXISTS userOrders;
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS users CASCADE;
        `);
        console.log("Hey man, we are dropping tables.")
    } catch (error) {
        console.error("Error dropping tables", error);
    }
}

async function createTables() {
    try {
        console.log("Starting to build tables...");
        // create all tables, in the correct order
        await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            "isAdmin" BOOLEAN DEFAULT FALSE,
            "isActive" BOOLEAN DEFAUL TRUE
        );
        CREATE TABLE products(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            publisher VARCHAR(255) NOT NULL,
            "image" TEXT NOT NULL,
            genre VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            rating NUMERIC,
            price NUMERIC NOT NULL,
            inventory SMALLINT NOT NULL,
            "isActive" BOOLEAN DEFAULT TRUE
        );
        CREATE TABLE user_orders(
            id SERIAL PRIMARY KEY,
            "userId" SMALLINT REFERENCES users(id) NOT NULL,
            "orderComplete" BOOLEAN DEFAULT TRUE,
            "orderPrice" NUMERIC(6,2) NOT NULL
        );
        CREATE TABLE order_details(
            id SERIAL PRIMARY KEY,
            "orderId" SMALLINT REFERENCES user_orders(id) NOT NULL,
            "productId" SMALLINT REFERENCES products(id) NOT NULL,
            "productPrice" NUMERIC(5,2),
            quantity SMALLINT NOT NULL
        );
    `);
        console.log("Finished building tables!");
    } catch (error) {
        console.error("Error building tables!", error);
    }
}

module.exports = { dropTables, createTables };