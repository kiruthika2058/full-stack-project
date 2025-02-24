const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:empId', employeeController.getSingleEmployee);
router.put('/:empId', employeeController.updateEmployee);
router.delete('/:empId', employeeController.deleteEmployee);

module.exports = router;
