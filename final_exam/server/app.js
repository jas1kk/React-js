const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const operationRouter = require("./routers/operationsRouter");
const productRouter = require("./routers/productRouter")
const cashRouter = require('./routers/cashAmount')
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"))

mongoose.connect(
  `mongodb+srv://jas1kk:nue41StDaebIOlGs@Cluster0.ygicohi.mongodb.net/social_network?retryWrites=true&w=majority`,
  (error) => {
    if (error) {
      console.log("ERORR", error);
    } else {
      console.log("server started");
      app.use("/operations", operationRouter);
      app.use("/products", productRouter);
      app.listen(8080);
    }
  }
);
