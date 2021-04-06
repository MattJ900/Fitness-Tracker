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
  
  router.put("/:id", (req, res) => {
    User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.post("/", ( req,res) => {
   User.findOneAndUpdate({}, { $push: { exercises: [req.body] } }, { new: true })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports=router