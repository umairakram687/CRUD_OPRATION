const express = require("express");
const cors = require("cors");

const app = express();

var corOptions = {
  origin: "http://localhost:8080",
};
// MIDDLEWARE

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router

const router = require("./router/productRouter");
app.use("/api/products", router);

//TESTING API

app.get("/", (req, res) => {
  res.send("Home Page");
});

//PORT

const PORT = process.env.PORT || 8080;

//SERVER
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
