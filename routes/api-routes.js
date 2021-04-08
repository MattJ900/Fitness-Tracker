const router = require("express").Router()
const {Workout}= require("../models")

router.get("/", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.post("/", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.put("/:id", ( req,res) => {
   Workout.findOneAndUpdate({}, { $push: { exercises: [req.body] } }, { new: true })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports=router




//look up virtual 
// for moongose 
//complete api routes
//final sweep
//