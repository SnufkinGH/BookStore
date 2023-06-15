import { ConfigSQL } from "../../../Config/ConfigSQL.js";
import pkg from 'bcryptjs';
import kekich from "jsonwebtoken";

const { hash, compare, compareSync, hashSync } = pkg;
const {sign} = kekich;

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return sign(payload, 'secret', {expiresIn: '24h'})
}

export class AuthM {

    async login(req, res){
        try{
            
            const {
                email,
                password
            } = req.body

            const vUser = await ConfigSQL.userSQL.find(email);

            if(!vUser) {
                return res.status(400).json({message: 'Такого пользователя не существует'});
            }

            const validPassword = compareSync(password, vUser.password);

            if(!validPassword) {
                return res.status(400).json({message: 'Неверный пароль'});
            }

            const token = generateAccessToken(vUser.id, vUser.role);
            return res.json({token});
        } catch(e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async registration(req, res){
        try{
            
            const {
                email,
                password
            } = req.body

            let vUser = await ConfigSQL.userSQL.find(email);

            if(vUser) {
                return res.status(400).json({message: 'Пользователь с таким email уже существует'});
            }

            const hashPassword = await hash(password, 3);
            await ConfigSQL.userSQL.insert(
                email,
                hashPassword,
                'USER'
            );

            vUser = await ConfigSQL.userSQL.find(email);
            const token = generateAccessToken(vUser.id, vUser.role);

            return res.json({token});
        } catch(e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}