const router = require("express").Router()
app.use("/api",require("./api-routes"))
app.use(require("./home-routes"))
module.exports=router