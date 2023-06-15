import kekich from "jsonwebtoken";

const {sign, verify} = kekich;

export function role(checkRole) {
    return function (req, res, next) {
        if (req.method  === 'OPTIONS') {
        next()
        }

        try{
            const token = req.headers.authorization;

            if(!token){
                return res.status(403).json({message: 'Пользователь не авторизован'});
            }

            const decodedData = verify(token, 'secret');

            if(decodedData.role != checkRole){
                return res.status(403).json({message: 'У вас нет прав'});
            }

            req.user = decodedData;

            next()
        }catch(e){
            console.log(e);
            return res.status(403).json({message: 'Пользователь не авторизован'});
        }
    }
};