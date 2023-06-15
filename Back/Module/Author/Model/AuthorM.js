import { ConfigSQL } from "../../../Config/ConfigSQL.js";

export class AuthorM {

    async getOne(req, res){
        try{
            
            const {
                author_id
            } = req.body

            const vAuthor = await ConfigSQL.authorSQL.get(author_id);

            return res.json(vAuthor);
        } catch(e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}