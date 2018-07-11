const router = require("express").Router();
const Product = require("../models/product");

//Todas las instancias de Product
router.get("/products", function (req, res){
  Product.find({}, function(err, object){
    res.json({products: object})
  })
});

//Ruta que es llamada por el id del QR
  router.get("/products/:id", function (req, res){

    var id = req.params.id;

    Product.findOne({p_id: id}, function(err, object){
      res.json({product: object})
    })
  });

//Ruata para mandar un producto al carrito
  router.put("/products/:id", function (req, res){
    Product.update({ p_id: req.params.id }, { $set: { inCart: req.body.inCart }}, function(err, object){
    if(err)
      console.log(err)
    res.send(["Bien", object])
  });
  });

//Ruta para mostrar los prductos en el carrito
router.get("/cart", function(req, res){
  Product.find({inCart: null}, function (err, cart){
    res.json({cart: cart})
  })
})

//Ruta para eliminar item de la base de datos
router.delete("/products/:id", function(req, res) {
  Product.remove({p_id: req.params.id}, function(err, product) {
    if (err)
      res.send(err);
      res.json({ message: 'Successfully deleted' });
  });
});

//Ruta para modificar el atributo inCart a true es decir meter un producto al carrito

module.exports = router;
