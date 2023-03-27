const express = require('express');
const baiTap = require('../Models/bai_tap')
const app = express();

app.get("/",(req , res) =>{
    res.render("input")
})

app.post("/saveData" , async (req  , res) =>{
    try {
        const data = new baiTap(req.body);
        if(data){
            await data.save()
            res.redirect("/baiTap/getAllData")
        }else{
            console.log("Error saving")
        }
    } catch (error) {
        console.log(error)
    }
   
})  

app.get("/getAllData" , async (req  ,res) =>{
    try {
        await baiTap.find({})
        .then(datas =>{
            res.render("output",{
                datas: datas.map(data => data.toJSON())
            })
          
        })
    } catch (error) {
        res.status(500).console(error)
    }
})



module.exports = app;