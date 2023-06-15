import { ConfigSQL } from "../../../Config/ConfigSQL.js";

export class PublisherM {

    async getOne(req, res){
        try{
            
            const {
                publisher_id
            } = req.body

            const vPublisher = await ConfigSQL.publisherSQL.get(publisher_id);

            return res.json(vPublisher);
        } catch(e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}