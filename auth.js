const JWT = require("jsonwebtoken");

module.exports = {
    authenticate: (req, res, next) => {
        const header = req.headers["authorization"];
        if (!header){
            return res
            .status(400)
            .json({error: "Authorization head"});
        }

        if (header.startsWith("Bearer")){
            const token = hearder.split(" ")[1];
            JWT.verify(token, process.env.SECRET, (error, decoded) => {
                if (error){
                    return res
                    .status(400)
                    .json({ error : "invalid Token!" })
                    } else{
                        return res
                        .status(400)
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
