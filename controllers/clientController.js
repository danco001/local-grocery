const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var Client = require('../models/client');

// Display list of all Clients.
exports.client_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Client list');
};

// Display detail page for a specific Client.
exports.client_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Client detail: ' + req.params.id);
};

// Display Client create form on GET.
exports.client_create_get = function(req, res, next) {       
    res.render('client_form', { title: 'Create Client'});
};

// Handle Client create on POST.
exports.client_create_post = [

    // Validate fields.
    body('name').isLength({ min: 1 }).trim().withMessage('The name must be specified.')
        .isAlphanumeric().withMessage('The name you have entered has non-alphanumeric characters.'),
    
    // Sanitize fields.
    sanitizeBody('name').trim().escape(),
    
    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('client_form', { title: 'Create Client', client: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Client object with escaped and trimmed data.
            var client = new Client(
                {
                    name: req.body.name,
                    
                });
            client.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new client record.
                res.redirect(client.url);
            });
        }
    }
];

// Display Client delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Client delete GET');
};

// Handle Client delete on POST.
exports.Client_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Client delete POST');
};

// Display Client update form on GET.
exports.Client_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Client update GET');
};

// Handle Client update on POST.
exports.Client_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Client update POST');
};