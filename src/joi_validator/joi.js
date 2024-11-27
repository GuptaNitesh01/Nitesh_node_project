const Joi = require('joi');
async function main(req,res){
    const schema = Joi.object({

        name: Joi.string()
            .alphanum() // Only allow alphanumeric characters
            .min(3) // Minimum length: 3 characters
            .max(30) // Maximum length: 30 characters
            .required(), // This field is required
    
        mobile:Joi.number()
        .integer()
        .min(1000000000)
        .max(9999999999)
        .required(),

        address:Joi.object()
        
    })

    const schema2 = Joi.object({
        city:Joi.string().required(),
        country:Joi.string().required(),
        state:Joi.string().required(),
        pincode:Joi.string().required(),
    })

    const address = {
        city:'mumbai',
        country:'india',
        state:'maharashtra',
        pincode:'400075',
    }

    const value = await schema.validate({ name: 'abc', mobile:9878678756,address });
    console.log(value); 
    // const add = await schema2.validate(address);
    // console.log(add); // Expected: { username: 'abc', birth_year: 1994 }
    res.send(value)
}
module.exports = {
    main
}