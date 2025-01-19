const Employee = require('../models/Employee');

// Create Employee
exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);  // Creating a new employee from the request body
    await newEmployee.save();  // Save the employee to MongoDB
    res.status(201).json({ message: 'Employee created successfully.', employee: newEmployee });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();  // Retrieve all employees from MongoDB
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a Single Employee
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findOne({ empId: req.params.empId });  // Find employee by empId
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { empId: req.params.empId },
      req.body,
      { new: true }  // returns the updated employee document
    );
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully', employee });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOneAndDelete({ empId: req.params.empId });  // Find and delete employee by empId
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
