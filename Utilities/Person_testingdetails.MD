Hotel Management System API - Person Management Welcome to the Hotel Management System API! This section of the API allows you to manage persons associated with the hotel, including staff members and guests. Below are instructions on how to interact with the API endpoints related to persons.
API Endpoints Create a New Person (POST): Request Method: POST URL: http://localhost:3000/api/persons Headers: Content-Type: application/json Request Body: json Copy code { "name": "John Doe", "age": 30, "work": "chef", "mobile": "123-456-7890", "email": "john@example.com", "address": "123 Main St, City", "salary": 50000, "username": "john_doe",