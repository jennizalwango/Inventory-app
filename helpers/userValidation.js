const { validateSchema } = require("express-validator");

    
module.exports ={
    validatesignup: () =>{
        return (req, res, next) => {
            const result = validateSchema(req.body, validateFeilds.schema)
            if (result.error){
                return res
                .status(400)
                .json({error : error.result.details[0].errorMessage})
            }
            next();
        };
    } 
};

const validateFeilds = {
    schema: {
        password: {
            isLength: {
                errorMessage: "Password should be at least 5 characters",
                options: { min: 5 }
            }
        },
        email: {
            isEmpty: {
                errorMessage: "Email should be provided",
            },

            isEmail: {
                errorMessage: "Email should have an @ sign"
            }
        },
        role : {
            isEmpty: {
                errorMessage: " Role should be provided"
            }    
        }
    }
}
