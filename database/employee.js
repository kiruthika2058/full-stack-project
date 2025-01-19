const mongoose = require('mongoose');

// Define the schema for the Employee
const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
    unique: true // Ensures empId is unique in the collection
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

// Create and export the Employee model based on the schema
module.exports = mongoose.model('Employee', employeeSchema);
