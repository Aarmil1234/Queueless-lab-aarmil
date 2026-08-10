// /models/parameterModel.js
const mongoose = require('mongoose');

const testReportSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        uppercase: true
    },
    labId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LaboratoryOwner',
        required: true,
        index: true
    },
    testName: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    delete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

// code index is already defined with unique: true in schema
parameterSchema.index({ category: 1 });
parameterSchema.index({ isActive: 1 });

const TestReport = mongoose.model('TestReport', parameterSchema);

module.exports = Parameter;