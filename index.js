var express = require("express")
var app = express()

app.set("view engine","ejs")

app.use(express.static("./"))

app.get('/',(req,res)=>{
    res.render("index")
})

var porta = process.env.PORT || 3737

app.listen(porta)