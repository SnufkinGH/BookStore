import db from '../Config/ConfigDB.js'

export class PublisherSQL {

    async get(idPublisher) {

        const vPublisher = await db
            .select()
            .from('publisher')
            .where('id', idPublisher);

        return vPublisher;
    }
}