const postgres = require("postgres");


const sql = postgres({
    host: 'host.docker.internal',            // Postgres ip address[s] or domain name[s]
    port: 5432,          // Postgres server port[s]
    database: 'postgres',            // Name of database to connect to
    username: 'postgres',            // Username of database user
    password: 'postgres',            // Password of database user

})

async function run() {
    // await sql`
    //     DROP TABLE IF EXISTS todos
    // `

    try {
        await sql`
            CREATE TABLE todos (
                id              bigserial primary key,
                task            text,
                done            boolean default false,
                timestamp       timestamptz default now()
            );
        `
        console.log('migrations applied')
        process.exit(888)
    } catch (error) {
        console.log('migrations skipped')
        process.exit(777)
    }

}

run()