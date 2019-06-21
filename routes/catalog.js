var express = require('express');
var router = express.Router();

// Require controller modules.
var product_controller = require('../controllers/productController');
var client_controller = require('../controllers/clientController');
var product_instance_controller = require('../controllers/productinstanceController');

/// PRODUCT ROUTES ///

// GET catalog home pages.
router.get('/', product_controller.index);

// GET request for creating a Product. NOTE This must come before routes that display Product (uses id).
router.get('/product/create', product_controller.product_create_get);

// POST request for creating Product.
router.post('/product/create', book_controller.product_create_post);

// GET request to delete Product.
router.get('/product/:id/delete', product_controller.product_delete_get);

// POST request to delete Product.
router.post('/product/:id/delete', product_controller.product_delete_post);

// GET request to update Product.
router.get('/product/:id/update', product_controller.product_update_get);

// POST request to update Product.
router.post('/product/:id/update', product_controller.product_update_post);

// GET request for one Product.
router.get('/product/:id', product_controller.product_detail);

// GET request for list of all Product items.
router.get('/products', product_controller.product_list);

/// CLIENT ROUTES ///

// GET request for creating Client. NOTE This must come before route for id (i.e. display client).
router.get('/client/create', client_controller.client_create_get);

// POST request for creating Client.
router.post('/client/create', client_controller.client_create_post);

// GET request to delete Client.
router.get('/client/:id/delete', client_controller.client_delete_get);

// POST request to delete Client.
router.post('/client/:id/delete', client_controller.client_delete_post);

// GET request to update Client.
router.get('/client/:id/update', client_controller.client_update_get);

// POST request to update Client.
router.post('/client/:id/update', client_controller.client_update_post);

// GET request for one Client.
router.get('/client/:id', client_controller.client_detail);

// GET request for list of all Authors.
router.get('/clients', client_controller.client_list);

/// PRODUCTINSTANCE ROUTES ///

// GET request for creating a ProductInstance. NOTE This must come before route that displays ProductInstance (uses id).
router.get('/productinstance/create', product_instance_controller.productinstance_create_get);

// POST request for creating ProductInstance. 
router.post('/productinstance/create', product_instance_controller.productinstance_create_post);

// GET request to delete ProductInstance.
router.get('/productinstance/:id/delete', product_instance_controller.productinstance_delete_get);

// POST request to delete ProductInstance.
router.post('/productinstance/:id/delete', product_instance_controller.productinstance_delete_post);

// GET request to update ProductInstance.
router.get('/productinstance/:id/update', product_instance_controller.productinstance_update_get);

// POST request to update BookInstance.
router.post('/productinstance/:id/update', product_instance_controller.productinstance_update_post);

// GET request for one ProductInstance.
router.get('/productinstance/:id', product_instance_controller.productinstance_detail);

// GET request for list of all ProductInstance.
router.get('/productinstances', product_instance_controller.productinstance_list);

module.exports = router;
