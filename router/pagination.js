module.exports = function (app) {
    app.get('/pagination/create', (req, res) => {
        let x = require("../src/pagination/page_number");
        console.log("X", x)
        x.main(req, res);
    })
}