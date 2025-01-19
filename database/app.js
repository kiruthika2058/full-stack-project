const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes'); // Assuming you have routes set up

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB Connection (replace <username>, <password>, and <dbname> with actual MongoDB Atlas credentials)
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/employeeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Routes for handling employee data
app.use('/api/employees', employeeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
