import knex from "knex";

class ConfigDB {
    static pg = knex({
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'root',
            database: 'bookstore'
        }
    })
}

export default ConfigDB.pg;