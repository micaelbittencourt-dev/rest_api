//Importing the product controller
const express = require("express");

//Importing express router
const router = express.Router();

//Importing the product controller
const {
  create,
  update,
  get,
  show,
  deleteProduct,
} = require("../controller/product.controller");

//Importing the product validation function from validation.middleware
const { productSchema } = require("../middleware/validation.middleware");

//Importing the upload function from out multer config file 
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Route for creating a product
 router.post("/", upload.array("files", 10), productSchema, create);

//Route to update a specfic product
router.put("/:id", upload.array("files", 10), productSchema, update);

//route to get all products
router.get("/", get);

//route to get or show only a specfic product
router.get("/:id", show);

//route to delete a specfic product
router.delete("/:id", deleteProduct);

//Exporting the routes
module.exports = router;
