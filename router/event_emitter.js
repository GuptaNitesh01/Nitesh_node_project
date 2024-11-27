module.exports = function (app) {
    app.get('/event_emitter/emit_events', (req, res) => {
        let x = require("../src/event_emitter/emit_events");
        console.log("X", x)
        x.main(req, res);
    })
}