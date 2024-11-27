module.exports = function (app) {
    app.post('/joi_validator/joi', (req, res) => {
        let x = require("../src/joi_validator/joi");
        console.log("X", x)
        x.main(req, res);
    })
}