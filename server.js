var express = require("express")
var app = express()
var expresshls = require("express-handlebars")
app.engine('hbs',expresshls.engine({
     extname:"hbs",
     defaultLayout:"main",
     layoutsDir:"views/layouts/"
}));
app.use(express.static("css"))
app.use(express.static("img"))
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/home', (req, res) => {
    res.render('home');
});
app.get("/thoitrang",(req,res)=>{
    res.render("thoitrang")
})
app.get("/lamdep",(req,res)=>{
    res.render("lamdep")
})
app.get("/vanhoa",(req,res)=>{
    res.render("vanhoa")
})


app.listen(3030)