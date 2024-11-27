module.exports = function (app) {
    app.get('/api_internal/create', (req, res) => {
        let x = require("./../src/api_internal_communication/call_other_api");
        console.log("X", x)
        x.main(req, res);
    })
}