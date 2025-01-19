const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
