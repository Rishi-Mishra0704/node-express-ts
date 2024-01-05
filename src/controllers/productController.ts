import { Request, Response } from "express";
import Product, { IProduct } from "../models/product";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProduct: IProduct = req.body;
    const createdProduct = await Product.create(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
