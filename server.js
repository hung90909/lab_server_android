const express = require('express')
const mongoose = require('mongoose')
const xeHoi = require('./Model/xehoiModels')
const port = 8080;
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/Quan_Ly_Xe_Hoi')
    .then(function () {
        console.log("connection established")
    })
    .catch(function (err) {
        console.log("connection error", + err)
    })
app.get('/', async (req, res) => {
    let xe = await xeHoi.find({nam: 2000 , giaBan:200.5});
    console.log(xe)
    res.send(xe)
}
)

app.get("/addXe" , async (req,res) =>{
    let kq = await xeHoi.insertMany([{
        ten:"Mazda",
        nam:2019,
        giaBan:3000
    }])
    console.log(kq)
    let xe = await xeHoi.find({});
    console.log(xe)
    res.send(xe)
})

app.get("/deleteXe" , async (req,res) =>{
     await xeHoi.findByIdAndDelete({_id:"64225dbc1b0cc6f53162432e"})
     let xe = await xeHoi.find({});
     console.log(xe)
     res.send(xe)
})

app.get("/updateXe" , async (req , res) =>{
    await xeHoi.updateOne({_id:"64225efee8596d9ce3ae6385"}, {$set:{ten:"lop" }} )
    let xe = await xeHoi.find({});
    console.log(xe)
    res.send(xe)
})

app.listen(8080, function () {
    console.log('listening on port:', + port)
})