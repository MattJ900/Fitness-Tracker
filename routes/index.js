const router = require("express").Router()
router.use("/api/workouts",require("./api-routes"))
router.use(require("./home-routes"))
module.exports=router