const JWT = require("jsonwebtoken");
const StatusCodes = require("http-status-codes");

module.exports = {
    authenticate: (req, res, next) => {
        const header = req.headers["authorization"];
        if (!header){
            return res
            .status(StatusCodes.BAD_REQUEST)
            .json({error: "Authorization head"});
        }

        if (header.startsWith("Bearer")){
            const token = hearder.split(" ")[1];
            JWT.verify(token, process.env.SECRET, (err, decoded) => {
                if (error){
                    return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json({ error : "invalid Token!" })
                    } else{
                        return res
                        .status(StatusCodes.BAD_REQUEST)
                        .json({error: "Malformed auhthorization. Auth header was in bad format, JWT token missing!"})
                    }
            });
        }
    },
    signToken: user => {
        const token = JWT.sign({
            id: user._id,
            email: user.email
        },
        process.env.SECRET,{
            expiresIn: "30m"
        });
        return token;
      }
};