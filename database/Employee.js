const mongoose = require('mongoose');

// Define the schema for the Employee
const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,   // This field is required
    unique: true      // empId must be unique
  },
  name: {
    type: String,
    required: true    // This field is required
  },
  position: {
    type: String,
    required: true    // This field is required
  },
  salary: {
    type: Number,
    required: true    // This field is required
  }
});

// Create and export the Employee model based on the schema
module.exports = mongoose.model('Employee', employeeSchema);
