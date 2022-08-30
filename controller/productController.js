const db = require("../models");

const Product = db.products;
const Reviwe = db.reviws;

// create product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    publish: req.body.publish ? req.body.publish : false,
  };

  const product = await Product.create(info);
  res.send({
    Status: "Success",
    Massege: "Product is inserted ",
    product: product,
  });
};

// getall product

const allProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
  console.log(products);
};

// get single product

const getoneProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.findOne({ where: { id: id } });
  if ((id = product?.id)) {
    res.send({
      Status: "Success",
      Massege: "Your need product is displayed",
      product: product,
    });
  } else {
    res.send({ Status: "Failed", Massege: "Id is empty" });
  }
};

// update product

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// delete product

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  let deletdata = await Product.findOne({ where: { id: id } });
  console.log("id", id);
  if (id === deletdata?.id) {
    await deletdata.destroy({ where: { id: id } });
    res.status(200).send({
      Status: "Success",
      Massege: "Product is Deleted Successfully",
      deletdata: deletdata,
    });
  } else {
    res.send({
      Status: "failed",
      Massege: "Product is not found",
    });
  }
};

const publishProduct = async (req, res) => {
  const products = await Product.findAll({ where: { publish: true } });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  allProducts,
  getoneProduct,
  updateProduct,
  deleteProduct,
  publishProduct,
};
