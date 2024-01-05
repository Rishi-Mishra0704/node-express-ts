import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "controllers/productController";

const router = express.Router();
router.get("/frozen", getAllProducts);
router.post("/frozen", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
