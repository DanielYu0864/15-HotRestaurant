const table = require("../data/table");
const waitlist = require("../data/waitinglist");


module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        res.json(table);
    });

    app.get("/api/waitlist", function(req, res) {
        res.json(waitlist);
    });

    app.post("/api/tables", function(req,res) {
        if (table.length < 5) {
            table.push(req.body);
            res.json(true);
        }

        else {
            waitListData.push(req.body);
            res.json(false);
        }
    });
};
