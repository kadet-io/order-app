import { KnexModule } from "nestjs-knex"

export const config = () => KnexModule.forRoot({
    config : {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
            filename: "./dev.sqlite3"
        }
    }
})