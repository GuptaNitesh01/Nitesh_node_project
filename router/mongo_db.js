module.exports = function (app) {
    app.post('/filesystem/create', (req, res) => {
        let x = require("./../src/mongo_db/create_mgdb");
        console.log("X", x)
        x.main(req, res);
    })

    app.get('/mongodb/delete', (req, res) => {
        let x = require("./../src/mongo_db/delete_mgdb");
        console.log("X", x)
        x.main(req, res);
    })


    app.get('/mongodb/update', (req, res) => {
        let x = require("./../src/mongo_db/update_mgdb");
        console.log("X", x)
        x.main(req, res);
    })


    app.get('/mongodb/read', (req, res) => {
        let x = require("./../src/mongo_db/read_mgdb");
        console.log("X", x)
        x.main(req, res);
    })

    app.get('/mongodb/read', (req, res) => {
        let x = require("./../src/api_internal_communication/call_other_api");
        console.log("X", x)
        x.main(req, res);
    })
    app.post('/mongodb/multiple_document', (req, res) => {
        let x = require("../src/mongo_db/multiple_document");
        console.log("X", x)
        x.main(req, res);
    })


}