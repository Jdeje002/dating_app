var path  = require("path");

module.exports = function(app) {
// Surveys Route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//Home page (default)
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

};