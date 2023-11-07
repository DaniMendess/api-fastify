import { sql } from './db.js'

//Deletando uma tabela no banco
// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log("Tabela deletada!")
// })

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT ,
    description TEXT,
    duration INTEGER
);

`.then(() => {
    console.log('Tabela criada!')
})