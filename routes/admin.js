const path = require('path')
const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

//Admin
router.get('/add-product', adminController.getAddProduct )

//Admin
router.get('/products',adminController.getProducts)

//Admin
router.post('/add-product', adminController.postAddProduct)


router.get('/edit-product/:productId', adminController.getEditProduct)

router.post('/edit-product', adminController.postEditProduct)

router.post('/delete-product', adminController.postDeleteProduct)

module.exports = router

