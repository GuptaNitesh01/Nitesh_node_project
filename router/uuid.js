module.exports = function (app) {
    app.get('/uuidapi', (req, res) => {
        let x = require("../src/utilities/uuid");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/uuidapi', (req, res) => {
        let x = require("../src/utilities/uuid");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/uuidapi', (req, res) => {
        let x = require("../src/utilities/uuid");
        console.log("X", x)
        x.main(req, res);
    })
   
}