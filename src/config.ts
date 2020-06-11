export const config = () => ({
    config : {
        client : 'sqlite3',
        connection: {filename: process.env.SQLITE_FILENAME}
        
    }
})