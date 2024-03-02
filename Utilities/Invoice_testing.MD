nvoice API Welcome to the Invoice API documentation. This API allows you to manage invoices for guests in a hotel or similar establishment.

Getting Started To use the Invoice API, follow the instructions below:

Installation Clone this repository to your local machine.

Install dependencies using npm:
npm install Start the server:

npm start

Endpoints The following endpoints are available in the API:

Create an Invoice (POST):
Use the URL http://localhost:3000/serial/invoices/ Headers: Content-Type: application/json Request Body Example: { "guestId": "611fe1e22ac1a80021b02d42", "items": [ { "name": "Room Service Breakfast", "description": "Continental breakfast", "quantity": 1, "price": 15.99 }, { "name": "Laundry Service", "description": "Washing and ironing", "quantity": 2, "price": 10.50 } ], "totalAmount": 37.99, "status": "pending" } Instructions: Set the request method to POST. Use the URL /invoices. Set the Content-Type header to application/json. Include the invoice details in the request body as shown in the example.

Get All Invoices (GET):