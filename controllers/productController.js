var Product = require('../models/product');
var Client = require('../models/client');
var ProductInstance = require('../models/productinstance');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        product_count: function(callback) {
            Product.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        product_instance_count: function(callback) {
            ProductInstance.countDocuments({}, callback);
        },
        product_instance_available_count: function(callback) {
            ProductInstance.countDocuments({status:'Available'}, callback);
        },
        client_count: function(callback) {
            Client.countDocuments({}, callback);
        },
    
        function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};

// Display list of all ProductInstances.
exports.produactinstance_list = function(req, res, next) {

  ProductInstance.find()
    .populate('product')
    .exec(function (err, list_productinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('productinstance_list', { title: 'Product Instance List', productinstance_list: list_productinstances });
    });
    
};

// Display detail page for a specific product.
exports.product_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Product detail: ' + req.params.id);
};

// Display product create form on GET.
exports.product_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Product create GET');
};

// Handle product create on POST.
exports.product_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Product create POST');
};

// Display product delete form on GET.
exports.product_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Proudct delete GET');
};

// Handle product delete on POST.
exports.product_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Product delete POST');
};

// Display product update form on GET.
exports.product_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Product update GET');
};

// Handle product update on POST.
exports.product_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Product update POST');
};