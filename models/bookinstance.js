var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductInstanceSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, //reference to the associated book
    nutritionalvalue: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    selldate: {type: Date, default: Date.now}
  }
);

// Virtual for bookinstance's URL
ProductInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/Productinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('ProductInstance', ProductInstanceSchema);