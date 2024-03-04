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

## Frontend

As an additional effort, a frontend has been developed for this project. Follow the steps below to access the web application:

1. Open your web browser and navigate to the web hotel application website through folder named "Hotel_web_frontend".
2. Access the file named "index.html" within this folder.Once on the
   homepage (index.html), locate and click on the "Explore Now" button.
3. This action will direct you to the menu item route within the application.
4. Subsequently, the menu items available at the hotel will be displayed within the console of your web browser.

These steps provide a more detailed guide for accessing the frontend of the web hotel application, including navigating to the specific folder and file before exploring the application.

Feel free to explore the menu items and enjoy your virtual hotel experience!

## Bonus (Using Mongosh shell)

To achieve the bonus part of the project, follow these steps:

1. Navigate to the `Bonus` folder in our project directory.
2. Inside the `Bonus` folder, there should be a README file. Follow the instructions provided in that README file to implement the same schema validation on the newly created employees collection as I have done in my database. Additionally, I will attach the picture of the MongoDB employees collection schema validation created in my database as suggested in class.

If you encounter any issues or have questions, feel free to reach out for assistance.
