const router = require("express").Router();
const Product = require("../models/product");

//Todas las instancias de Product
router.get("/products", function (req, res){
  Product.find({}, function(err, object){
    res.json({products: object})
  })
});

//Busqueda de porducto por id de codigo QR
router.get("/products/:id", function (req, res){
  Product.findOne({p_id: req.params.id}, function(err, object){
    res.json({product: object})
  })
});

//Ruta para mostrar los prductos en el carrito
router.get("/cart", function(req, res){
  Product.findMany({inCart: true}, function (err, cart){
    res.json({cart: cart})
  })
})

module.exports = router;
