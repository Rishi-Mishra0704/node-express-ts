import express from 'express'
import { getAllProducts } from 'controllers/productController'

const router = express.Router()
router.get('/frozen', getAllProducts)

export default router