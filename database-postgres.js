import { v4 as uuidv4 } from 'uuid';
 
import { sql } from './db.js'

export class DatabasePostgres {

    async list(search) {
        let videos

        // vesificando se tiver um busca com um parametro especifico (query params)
        if (search) {
            videos = await sql`select * from videos where title ilike ${'%' + search + '%'}`
        } else {
            // se não lista todos os videos
            videos = sql`select * from videos`
        }

        return videos
    }

    async create(video) {
        const videoId = uuidv4();

        const { title, description, duration } = video

        await sql`insert into videos (id, title, description, duration) VALUES(${videoId}, ${title}, ${description}, ${duration})`
    }

    async update(id, video) {

        const { title, description, duration } = video

        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id} `
    }

    async delete(id) {
       await sql`delete from videos where id = ${id}`
    }
}
