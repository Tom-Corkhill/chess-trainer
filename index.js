const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req, res){
    res.render("chess");
});





const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));