import mongoose from "mongoose";

const ItemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    barcode: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    totalWeight: {
        type: String,
        required: true
    },
    indiWeight: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    unitPrice: {
        type: String,
        required: true
    },
    revenue: {
        type: String,
        required: true
    },
    buyDate: {
        type: String,
        required: true
    },
    sellDate: {
        type: String,
        required: true
    },
})

const soldItems = mongoose.model('soldItems', ItemsSchema);

export { soldItems };
