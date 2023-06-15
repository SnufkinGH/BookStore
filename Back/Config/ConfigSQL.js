import { BookSQL } from "../SQL/BookSQL.js"
import { AuthorSQL } from "../SQL/AuthorSQL.js"
import { PublisherSQL } from "../SQL/PublisherSQL.js";
import { UserSQL } from "../SQL/UserSQL.js";

export class ConfigSQL {

    static bookSQL = new BookSQL();
    static authorSQL = new AuthorSQL();
    static publisherSQL = new PublisherSQL();
    static userSQL = new UserSQL();
}