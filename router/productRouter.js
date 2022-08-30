const productController = require("../controller/productController");

const route = require("express").Router();

route.post("/addproduct", productController.addProduct);

route.get("/allproducts", productController.allProducts);

route.get("/oneproduct/:id", productController.getoneProduct);

route.get("/allpublishproduct", productController.publishProduct);

route.put("/updateproduct/:id", productController.updateProduct);

route.delete("/deleteproduct/:id", productController.deleteProduct);

module.exports = route;
