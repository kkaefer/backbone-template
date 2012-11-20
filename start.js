var express = require('express');
var app = express();

app.use(express.static('./public'));

// Define more routes here
app.get('/api/items', function(req, res) {
    res.json([
        {
            id: 1,
            title: "Lorem",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 4,
            title: "Dolor",
            body: "Chambray dolor quinoa lo-fi. Pitchfork seitan portland pariatur cardigan. Cred officia ea scenester cillum narwhal. Officia ad odd future, labore voluptate mustache sed vegan proident fingerstache. Viral retro VHS commodo nesciunt, fap swag sapiente. Pork belly vice scenester authentic. Dolor occupy placeat, pork belly skateboard nisi helvetica farm-to-table id incididunt carles Austin viral."
        }
    ]);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
