const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique:[true,"This product already exists"],
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    description: {
      type: String,
      required: [true, 'Please provide  product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    image: {
      type:String,
      required:true
    },
    category: {
      type: String,
      required: [true, 'Please provide a product category'],
      enum: ['face','nose','ears','eyes','lips','general'],
    },
    initialPrice:{
      type:Number,
    },
    company: {
      type: String,
      required: [true, 'Please provide a company name'],
    },
    colors: {
      type: [Array],
      default: ['#222'],
      required: true,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ProductSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
  justOne: false,
});

ProductSchema.pre('remove', async function (next) {
  await this.model('Review').deleteMany({ product: this._id });
});

module.exports = mongoose.model('Product', ProductSchema);
