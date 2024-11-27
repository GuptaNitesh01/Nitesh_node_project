module.exports = function (app) {
    app.get('/streamapi', (req, res) => {
        let x = require("../src/stream/create_read_stream");
        console.log("X", x)
        x.main(req, res);
    })
    app.get('/streamapi', (req, res) => {
        let x = require("../src/stream/create_write_stream");
        console.log("X", x)
        x.main(req, res);
    })
}