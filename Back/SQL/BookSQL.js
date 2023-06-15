import db from '../Config/ConfigDB.js'

export class BookSQL {

    async listAllBook() {

        const avBook = await db.select().from('book');

        return avBook;
    }
}