import { Pool } from "pg";

const USER_DEFAULT = "postgres"
const HOST_DEFAULT = "localhost";
const DATABASE_DEFAULT = "crudNode";
const PASSWORD_DEFAULT = "postgres";
const PORT_DEFAULT = 5432;

function connect() {
    const pool = new Pool({
        user: USER_DEFAULT,
        host: HOST_DEFAULT,
        database: DATABASE_DEFAULT,
        password: PASSWORD_DEFAULT,
        port: PORT_DEFAULT
    })

    return pool;
}

export default connect;