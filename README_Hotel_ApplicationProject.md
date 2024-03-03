
# Node Hotel Application
The Node Hotel application is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application manages information related to persons (staff) and menu items (food_options),invoices (Bills) for guests staying at Hotel. It exposes specific endpoints to handle CRUD (Create, Read, Update, Delete) operations for persons and menu items,invoices.

API Endpoint

# Menu Items
The MenuItem data model represents information about menu items available in the hotel.
Create a new menu item: POST /menu
Read all menu items: GET /menu
Read menu items by taste: GET /menu/:taste
Update a menu item by ID: PUT /menu/:id
Delete a menu item by ID: DELETE /menu/:id

# Persons
The Person data model represents information about staff members in the hotel.
Create a new person: POST /api/persons
Read all persons: GET /api/persons
Update a person by ID: PUT /api/persons/:id
Delete a person by ID: DELETE /api/persons/:id

# Invoices
The Invoices data model represents information about invoices of differnet guests staying in the hotel.
Create a new invoice: POST /serial/invoices
Read all invoices: GET /serial/invoices
Update an invoice by ID: PUT /serial/invoices/:id
Delete an invoice by ID: DELETE /serial/invoices/:id
Data Sets

Menu Items
Each menu item should have the following fields:
name: String
price: Number
taste: String (must be one of 'sweet', 'sour', 'spicy')
is_drink: Boolean (optional, defaults to false)
ingredients: Array of Strings (optional, defaults to empty array)
num_sales: Number (optional, defaults to 0)


Persons
Each person should have the following fields:
name: String
age: Number
email: String
phone: String

Invoices
Each invoice should have the following fields:
invoice_number: String
total_amount: Number
items: Array of Objects
item_id: String
quantity: Number

Client Validation
To validate the functionality of the API, you can use tools like Thunder Client, Postman, or curl commands. Here are some examples:

Thunder Client:
Set the request method and URL according to the desired endpoint.
Include the necessary request body for POST and PUT requests.
Send the request and inspect the response.