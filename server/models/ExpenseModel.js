const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 12
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 9,
        trim: true
    },
    type: {
        type: String,
        default:"expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 16,
        trim: true
    },
    userId:{
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)