const express = require('express')
const car = require("../Model/xehoiModels")
const moment = require("moment");
const { format, parseISO } = require("date-fns");
const app = express();

app.get("/", (req, res) => {
    res.redirect("/car/getAllCar")
})


app.get("/getAllCar", async (req, res) => {
    try {
        await car.find({})
            .then(items => {
                res.render("managerCar", {
                    items: items.map(item => item.toJSON())
                })
            })
    } catch (error) {
       res.status(500).send(error)
    }
})

app.get("/delete/:id" , async (req , res) =>{
        await car.findByIdAndDelete({_id: req.params.id})
        await car.find({})
        .then(items => {
            res.render("managerCar", {
                items: items.map(item => item.toJSON())
            })
        })
    
})

app.get("/addCar" , (req , res) =>{
    res.render("addOrEditCar",{
        titleView:"Thêm Xe"
    })
})

app.post("/inserCar", async (req, res) => {
    try {
      const xe = new car(req.body)
      await xe.save();
      res.redirect("/car/getAllCar");
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get("/edit/:id",async (req, res) =>{
    try {
        await car.findById(req.params.id)
        .then(items => {
            res.render("EditCar",{
                items:items.toJSON(),
                titleView:"Update Car",
            })
            console.log(items.toJSON());
        })
    } catch (error) {
        res.status(500).send(error);
    }
  })

  app.put("/updateCar/:id",async (req , res)=>{
    try {
        await car.updateOne({_id: req.params.id}, req.body)
        res.redirect("/car/getAllCar")
    } catch (error) {
        res.status(500).send(error);
    }

  })

module.exports = app;