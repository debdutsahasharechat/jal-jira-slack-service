const router = require('express').Router();

router.get("/", (req,res) => {
    console.log("Hellow bro!!!!")
    res.send("Hello world")
})

exports.router = router