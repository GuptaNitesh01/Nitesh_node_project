module.exports = function (app) {
    app.get('/readpipe', (req, res) => {
        let x = require("../src/stream/read_pipe");
        console.log("X", x)
        x.main(req, res);
    })
   
}