import { ConfigSQL } from "../../../Config/ConfigSQL.js";


export class CatalogM {

    async init(req, res){
        try{
            
            const avBook = await ConfigSQL.bookSQL.listAllBook();

            return res.json(avBook);
        } catch(e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}