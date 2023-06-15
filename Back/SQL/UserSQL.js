import db from '../Config/ConfigDB.js'

export class UserSQL {

    async find(email) {

        const vUser = await db
            .from('user_info')
            .where('email', email)
            .first();

        return vUser;
    }

    async insert(email, password, role) {

        const vUser = await db('user_info')
            .insert({
                email: email,
                password: password,
                role: role
            });

        return vUser;
    }

}