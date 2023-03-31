const express = require('express')
const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
const carroutes = require("./Routes/CarRoutes")
const parser = require("body-parser")
const xeHoi = require('./Model/xehoiModels')
const bodyParser = require('body-parser')
const method = require("method-override")
const port = 8080;
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/Quan_Ly_Xe_Hoi')
    .then(function () {
        console.log("connection established")
    })
    .catch(function (err) {
        console.log("connection error", + err)
    })

app.engine('.hbs', handlebars.engine({
    extname: "hbs"
}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(method("_method"))
app.use("/car",carroutes)

// app.get('/', async (req, res) => {
//     let xe = await xeHoi.find({});
//     console.log(xe)
//     res.send(xe)
// }
// )

// app.get("/addXe", async (req, res) => {
//     let kq = await xeHoi.insertMany([{
//         ten: "Mec",
//         nam: 2019,
//         giaBan: 3000
//     }])
//     console.log(kq)
//     let xe = await xeHoi.find({});
//     console.log(xe)
//     res.send(xe)
// })

// app.get("/deleteXe", async (req, res) => {
//     await xeHoi.findByIdAndDelete({ _id: "642256a71b0cc6f53162432b" })
//     let xe = await xeHoi.find({});
//     console.log(xe)
//     res.send(xe)
// })

// app.get("/updateXe", async (req, res) => {
//     await xeHoi.updateOne({ _id: "642443711f1faca6c658b502" }, { $set: { ten: "toyota" } })
//     let xe = await xeHoi.find({});
//     console.log(xe)
//     res.send(xe)
// })

app.listen(8080, function () {
    console.log('listening on port:', + port)
})