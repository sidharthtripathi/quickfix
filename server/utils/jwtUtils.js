const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;
const { throwError } = require("./throwError");


const signJWT = async (payload, expiresIn = '15min') => {
    return jwt.sign(payload, secretKey, { expiresIn });
}


const verifyJWT = async (token, next) => {
    try {
        console.log(token)
        console.log(secretKey)
        const decoded = await jwt.verify(token, secretKey);
        console.log(decoded)
        return decoded;
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            throwError("JWT verification failed", 400);
        }

        else {


            if (err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        }


    }
}


module.exports = { signJWT, verifyJWT };