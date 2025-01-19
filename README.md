# full-stack-project 
# Employee Management API
## Project Overview
The Employee Management API is a backend application that allows users to manage employee details. It provides endpoints for creating, reading, updating, and deleting employee records. The system stores employee data in a MongoDB database and uses Node.js, Express, and Mongoose for building the API.

## Features:
Create new employee records.
Retrieve employee details (both single and all employees).
Update employee details.
Delete employee records.
## Installation Instructions
## Prerequisites:
Node.js and npm installed. Download and install Node.js.
MongoDB Atlas account or local MongoDB instance set up.
## Steps to Set Up:
## 1)Clone the repository:
git clone https://github.com/yourusername/employee-management-api.git
cd employee-management-api
## 2)Install dependencies: Run the following command to install all necessary dependencies:

npm install
## 3)Set up MongoDB:
##  If using MongoDB Atlas:
Create a free MongoDB Atlas cluster.
Obtain the connection string from the Atlas dashboard and update it in the app.js file.
Replace <username>, <password>, and <dbname> in the connection URL.
If using a local MongoDB instance, run MongoDB locally and ensure it's accessible.
## 4)Run the application: 
Start the server with the following command:
node app.js
The server will start running on http://localhost:5000 (or the port you have configured).
## 5)Test the API: Use a tool like Postman or REST Client in VS Code to test the endpoints.  

## Usage
Once the API is up and running, you can interact with it via the following HTTP methods:

POST /api/employees: Create a new employee record.
GET /api/employees: Retrieve a list of all employees.
GET /api/employees/:empId: Retrieve details of a single employee by their empId.
PUT /api/employees/:empId: Update an existing employee record.
DELETE /api/employees/:empId: Delete an employee record by their empId.
Example request for creating an employee (using Postman or REST Client):

{
  "empId": "E001",
  "name": "Alice Johnson",
  "position": "Software Engineer",
  "salary": 80000
}
# API Endpoints
## 1. Create Employee
URL: /api/employees
Method: POST
Request Body:
{
  "empId": "E001",
  "name": "Alice Johnson",
  "position": "Software Engineer",
  "salary": 80000
}
Description: Adds a new employee to the database.
## 2. Get All Employees
URL: /api/employees
Method: GET
Response:
[
  {
    "empId": "E001",
    "name": "Alice Johnson",
    "position": "Software Engineer",
    "salary": 80000
  },
  {
    "empId": "E002",
    "name": "Bob Smith",
    "position": "HR Manager",
    "salary": 75000
  }
]
Description: Retrieves a list of all employees.
## 3. Get Employee by empId
URL: /api/employees/:empId
Method: GET
Response:
{
  "empId": "E001",
  "name": "Alice Johnson",
  "position": "Software Engineer",
  "salary": 80000
}
Description: Retrieves details of a specific employee by their empId.
## 4. Update Employee
URL: /api/employees/:empId
Method: PUT
Request Body:

{
  "name": "Alice Johnson",
  "position": "Senior Software Engineer",
  "salary": 90000
}
Description: Updates an existing employee record by empId.
## 5. Delete Employee
URL: /api/employees/:empId
Method: DELETE
Description: Deletes an employee record by their empId.
## Testing with .rest File
If you're using the REST Client extension in Visual Studio Code, you can create a .rest file and add the following requests to test the API:
To run tests using the REST Client extension in Visual Studio Code, follow these steps:

### Install the REST Client Extension:

Open Visual Studio Code.
Go to the Extensions panel (on the left sidebar).
Search for "REST Client" and install it.
### Create a .rest File:

In the root directory of your project, create a file named employee-management-api.rest.
### Add API Requests:

Add the following requests to the .rest file to test the API endpoints:
### Create an Employee
POST http://localhost:5000/api/employees
Content-Type: application/json

{
  "empId": "E001",
  "name": "Alice Johnson",
  "position": "Software Engineer",
  "salary": 80000
}

### Get All Employees
GET http://localhost:5000/api/employees

### Get a Single Employee by empId
GET http://localhost:5000/api/employees/E001

### Update Employee Details
PUT http://localhost:5000/api/employees/E001
Content-Type: application/json

{
  "name": "Alice Johnson",
  "position": "Senior Software Engineer",
  "salary": 90000
}

### Delete an Employee
DELETE http://localhost:5000/api/employees/E001
To test a request, simply click on "Send Request" in VS Code above each block, and you will see the API response.
