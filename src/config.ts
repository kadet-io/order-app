<<<<<<< HEAD
import { KnexModule } from 'nestjs-knex';

export const config = () => KnexModule.forRoot({
    config : {
        client : "sqlite3",
        useNullAsDefault: true,
        connection: ':memory'
=======
export const config = () => ({
    config : {
        client : 'sqlite3',
        connection: {filename: process.env.SQLITE_FILENAME}
        
>>>>>>> 9b1b35e1285c06a71c666ad05655b82dc98ea396
    }
})