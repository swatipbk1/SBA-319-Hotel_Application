Node Hotel Application
The Node Hotel application is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application manages information related to persons (staff) and menu items (food_options),invoices (Bills) for guests staying at Hotel. It exposes specific endpoints to handle CRUD (Create, Read, Update, Delete) operations for persons and menu items,invoices.

API Endpoint
Menu Items
The MenuItem data model represents information about menu items available in the hotel. Create a new menu item: POST /menu Read all menu items: GET /menu Read menu items by taste: GET /menu/:taste Update a menu item by ID: PUT /menu/:id Delete a menu item by ID: DELETE /menu/:id
Persons
The Person data model represents information about staff members in the hotel. Create a new person: POST /api/persons Read all persons: GET /api/persons Update a person by ID: PUT /api/persons/:id Delete a person by ID: DELETE /api/persons/:id