const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ['furniture', 'electronics'],
        required: true,
    },
    subcategory: {
        type: String,
        required: function () {
            return this.category === 'furniture';
        },
        enum: ['kitchen', 'hall', 'bedroom'],
    },
    subcategory: {
        type: String,
        required: function () {
            return this.category === 'electronics';
        },
        enum: ['fan', 'TV', 'mobile'],
    },
    quantity: {
        type: Number,
        default: 1, // Default quantity to 1 if not specified
    },
    seller: {
        name: String,
        contact: String,
        // You can add more seller details if needed
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
    
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
