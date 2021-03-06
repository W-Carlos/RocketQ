const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        // Tabela das salas
        await db.exec(`CREATE TABLE rooms (
                id INTEGER PRIMARY KEY,
                pass TEXT
            )`);

        // Tabela das perguntas
        await db.exec(`CREATE TABLE questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                read INT,
                room INT
            )`);
        
        await db.close()
    }
}

initDb.init();