const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const products = require("./varialbes/products");
const Product = require("./models/product");

mongoose.connect("mongodb://localhost:27017/mongoose_express", {
  useNewUrlParser: true
}).then(function(){
  console.log("Database")
});

//Creación de instancias de Product
// products.map((product) => {
//   var product = new Product(product);
//   product.save(function(err){
//     if(err) return handleError(err);
//   })
// })

Product.remove({})

const app = express();
app.use(bodyParser.urlencoded({extend: true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;

app.engine("mustache", mustacheExpressInstance);
app.set("view engine", "mustache");

app.use("/", routes);

app.listen(3000, function(){
  console.log("Listening to port 3000");
});
