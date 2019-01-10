const express = require('express')
const app = express()

var hour = new Date().getHours()

if (hour<8 || hour>=17) {
    app.get("*.html", (req, res) => {
res.sendFile(__dirname+'/public/error/error.html')
    })
}
else { app.use(express.static("public")) }

app.get("*", (req, res) => {
    res.sendFile(__dirname+'/public/home.html')
        })

app.listen(3001, function () {
    console.log("server is listening on port 3000");
});