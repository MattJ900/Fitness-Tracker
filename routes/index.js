const router = require("express").Router()
app.use("/api/workouts",require("./api-routes"))
app.use(require("./home-routes"))
module.exports=router