import kekich from "jsonwebtoken";

const {sign, verify} = kekich;

export function auth(req, res, next) {
    if (req.method  === 'OPTIONS') {
        next()
    }

    try{
        const token = req.headers.authorization;
        console.log('token', token);

        if(!token){
            return res.status(403).json({message: 'Пользователь не авторизован'});
        }

        const decodedData = verify(token, 'secret');
        req.user = decodedData
        next()
    }catch(e){
        console.log(e);
        return res.status(403).json({message: 'Пользователь не авторизован'});
    }
}