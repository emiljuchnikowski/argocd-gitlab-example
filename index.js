const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send({
        body: "API v1.0." + process.env.BUILD_VERSION
    });
})

const server = app.listen(3000, () => {
    console.log("Przykład działa pod adresem http://localhost:3000");
})