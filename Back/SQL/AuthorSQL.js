import db from '../Config/ConfigDB.js'

export class AuthorSQL {

    async get(idAuthor) {

        const vAuthor = await db
            .from('author')
            .where('id', idAuthor)
            .first();
            
        return vAuthor;
    }
}