//Additional Section-Bonus part!
//Ensuring schema validation requirements, including indexing on the "employees" collection and data validation, is accomplished using the Mongosh shell directly at the database level!//

##Guided Setup for "Employees" Collection Creation and Validation:
Simplify the process by following these step-by-step instructions to establish the "employees" collection and enforce validation rules within your database. These meticulous steps ensure data integrity and optimal performance for your MongoDB environment.

Creating and Populating a MongoDB Database
Prerequisites
MongoDB installed on your local machine
MongoDB shell
Steps
Open your terminal or command prompt.

Start the MongoDB shell by running the following command:

Copy code
mongo
Switch to the desired database or create a new one using the use command. For example, to create a database named db, run:

perl
Copy code
use db
Define the JSON schema for the "employees" collection and create indexes. In the MongoDB shell, run:

javascript
Copy code
db.createCollection("employees", {
validator: {
$jsonSchema: {
bsonType: 'object',
required: [
'employee_id',
'Fname',
'Lname',
'age',
'salary',
'job_title',
'department_id'
],
properties: {
employee_id: {
bsonType: 'int',
description: 'must be an integer and is required'
},
Fname: {
bsonType: 'string',
description: 'must be a string and is required'
},
Lname: {
bsonType: 'string',
description: 'must be a string and is required'
},
age: {
bsonType: 'int',
minimum: 18,
description: 'must be an integer greater than or equal to 18 and is required'
},
salary: {
bsonType: 'double',
minimum: 0,
description: 'must be a double greater than or equal to 0 and is required'
},
job_title: {
bsonType: 'string',
description: 'must be a string and is required'
},
department_id: {
bsonType: 'int',
description: 'must be an integer and is required'
}
}
}
},
validationLevel: "strict",
validationAction: "error"
});

// Create indexes
db.employees.createIndex({ employee_id: 1 });
db.employees.createIndex({ department_id: 1 });
Populate the "employees" table with the provided data. Run the following command:

javascript
Copy code
db.employees.insertMany([
{
employee_id: 1,
Fname: "John",
Lname: "Doe",
age: 25,
salary: 50000.67,
job_title: "Software Engineer",
department_id: 101
},
{
employee_id: 2,
Fname: "Jane",
Lname: "Smith",
age: 30,
salary: 60000.39,
job_title: "Data Analyst",
department_id: 102
},
{
employee_id: 3,
Fname: "Alice",
Lname: "Johnson",
age: 28,
salary: 55000.59,
job_title: "Product Manager",
department_id: 103
}
]);
Verify that the data has been successfully inserted by running:

javascript
Copy code
db.employees.find().pretty();
You have now successfully created and populated the "employees" table in the MongoDB database with indexes on the employee_id and department_id fields.
