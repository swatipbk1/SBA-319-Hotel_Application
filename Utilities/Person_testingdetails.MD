Hotel Management System API - Person Management
Welcome to the Hotel Management System API! This section of the API allows you to manage persons associated with the hotel, including staff members and guests. Below are instructions on how to interact with the API endpoints related to persons.

API Endpoints
Create a New Person (POST):
Request Method: POST
URL: http://localhost:3000/api/persons
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
    "name": "John Doe",
    "age": 30,
    "work": "chef",
    "mobile": "123-456-7890",
    "email": "john@example.com",
    "address": "123 Main St, City",
    "salary": 50000,
    "username": "john_doe",
    "password": "password123"
}
Instructions:
Set the request method to POST.
Use the URL http://localhost:3000/api/persons.
Set the Content-Type header to application/json.
Include the person details in the request body as shown in the example.
Get All People (GET):
Request Method: GET
URL: http://localhost:3000/api/persons
Instructions:
Set the request method to GET.
Use the URL http://localhost:3000/api/persons
No additional parameters or headers needed.
Update a Person (PUT):
Request Method: PUT
URL: http://localhost:3000/api/persons/:id(object_id)
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
    "name": "John Doe",
    "age": 31,
    "work": "chef",
    "mobile": "123-456-7890",
    "email": "john@example.com",
    "address": "123 Main St, City",
    "salary": 55000,
    "username": "john_doe",
    "password": "password123"
}
Instructions:
Set the request method to PUT.
Use the URL http://localhost:3000/api/persons/:id, replacing :id with the ID of the person you want to update.
Set the Content-Type header to application/json.
Include the updated person details in the request body as shown in the example.
Partially Update a Person (PATCH):
Request Method: PATCH
URL: http://localhost:3000/api/persons/:id
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
    "age": 32,
    "salary": 60000
}
Instructions:
Set the request method to PATCH.
Use the URL http://localhost:3000/api/persons/:id, replacing :id with the ID of the person you want to partially update.
Set the Content-Type header to application/json.
Include the partial person details to update in the request body as shown in the example.
Delete a Person (DELETE):
Request Method: DELETE
URL: http://localhost:3000/api/persons/:id
Instructions:
Set the request method to DELETE.
Use the URL http://localhost:3000/api/persons/:id, replacing :id with the ID of the person you want to delete.
No additional parameters or headers needed.
These instructions provide clear guidance on how to perform each type of request on your API endpoints for managing persons. Adjust the URL, request body, and request method as needed for your specific application.