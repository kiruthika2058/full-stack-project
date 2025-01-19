const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Route to create an employee
router.post('/', employeeController.createEmployee);

// Route to get all employees
router.get('/', employeeController.getAllEmployees);

// Route to get a single employee by empId
router.get('/:empId', employeeController.getEmployeeById);

// Route to update an employee by empId
router.put('/:empId', employeeController.updateEmployee);

// Route to delete an employee by empId
router.delete('/:empId', employeeController.deleteEmployee);

module.exports = router;
