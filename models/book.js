var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    Name: {type: String, required: true},
    Type: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    Nutritionalvalue: {type: String, required: true},

  }
);

// Virtual for book's URL
ProductSchema
.virtual('url')
.get(function () {
  return '/catalog/product/' + this._id;
});

//Export model
module.exports = mongoose.model('Product', ProductSchema);
