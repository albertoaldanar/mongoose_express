const router = require("express").Router();
const Product = require("../models/product");

//Todas las instancias de Product
router.get("/products", function (req, res){
  Product.find({}, function(err, object){
    res.json({products: object})
  })
});

//Rutas que necesitan tener acceso al id del producto

//Ruta que es llamada por el id del QR
  router.get("/products/:id", function (req, res){
    Product.findOne({p_id: req.params.id}, function(err, object){
      res.json({product: object})
    })
  });

//Ruata para mandar un producto al carrito
  router.put("/products/:id", function (req, res){
    Product.findOneAndUpdate({p_id: req.params.id}, function(err, object){
      if(err)
        res.send(err);

      object.inCart = req.body.inCart;

      object.save(function(err){
        if(err)
          res.send(err)
        res.json({message: "Product updated"});
      })
    })
  });

//Ruta para mostrar los prductos en el carrito
router.get("/cart", function(req, res){
  Product.findMany({inCart: true}, function (err, cart){
    res.json({cart: cart})
  })
})

//Ruta para modificar el atributo inCart a true es decir meter un producto al carrito

module.exports = router;
