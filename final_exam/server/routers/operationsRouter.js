const express = require("express");
const { ReactOperationModel } = require("../Models");
const router = express.Router();

router.get("/", (req,res) => {
    ReactOperationModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
})

router.post("/", async (req, res) => {
    const { type, name, product_amount,product_summ } = req.body;

    const newPost = new ReactOperationModel({ type, name, product_amount, product_summ});
    newPost.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("new operation created");
        }
    });
})

module.exports = router;