const jwt = require("jsonwebtoken");

function verifyToken (req, res, next) {
    try {
        const tokenHeader = req.headers['Authorization']; 
        const token = tokenHeader && tokenHeader.split(' ')[1];
        
        if (!token) {
            return res.status(403).json({msg : "O policial precisa ter um token de acesso."});
        }
        jwt.verify(token, "chave", (error, user) => {
            if(error) {
                return res.status(403).json({msg : "Esse policial não possui acesso ao sistema."});
            }
            req.user = user
            next();
        });    
    }
    catch(error) {
        return res.status(400);
    }
     
}

module.exports = verifyToken;