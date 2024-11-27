module.exports = function (app) {
    app.get('/jwt_authentication', (req, res) => {
        let x = require("../src/jwt/authentication");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/create_jwt_token', (req, res) => {
        let x = require("../src/jwt/create_jwt_token");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/verify_jwt_token', (req, res) => {
        let x = require("../src/jwt/verify_jwt_token");
        console.log("X", x)
        x.main(req, res);
    })

   
}