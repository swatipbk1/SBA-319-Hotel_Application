Create a New Menu Item (POST):
Request Method: POST
URL: http://localhost:3000/menu
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
    "name": "Spicy Chicken Wings",
    "price": 10.99,
    "taste": "spicy",
    "ingredients": ["chicken wings", "spices"],
    "is_drink": false
}
Instructions:
Set the request method to POST.
Use the URL http://localhost:3000/menu.
Set the Content-Type header to application/json.
Include the menu item details in the request body as shown in the example.
Read All Menu Items (GET):
Request Method: GET
URL: http://localhost:3000/menu
Instructions:
Set the request method to GET.
Use the URL http://localhost:3000/menu.
No additional parameters or headers needed.
Read Menu Items by Taste (GET):
Request Method: GET
URL: http://localhost:3000/menu/spicy
Instructions:
Set the request method to GET.
Use the URL http://localhost:3000/menu/spicy.
Replace spicy in the URL with the desired taste (sweet, sour, etc.).
Update a Menu Item by ID (PUT):
Request Method: PUT
URL: http://localhost:3000/menu/:id
Headers:
Content-Type: application/json
Request Body:
json
Copy code
{
    "name": "Spicy Chicken Wings",
    "price": 12.99,
    "taste": "spicy",
    "ingredients": ["chicken wings", "spices", "hot sauce"],
    "is_drink": false
}
Instructions:
Set the request method to PUT.
Use the URL http://localhost:3000/menu/:id, replacing :id with the ID of the menu item you want to update.
Set the Content-Type header to application/json.
Include the updated menu item details in the request body as shown in the example.
Delete a Menu Item by ID (DELETE):
Request Method: DELETE
URL: http://localhost:3000/menu/:id
Instructions:
Set the request method to DELETE.
Use the URL http://localhost:3000/menu/:id, replacing :id with the ID of the menu item you want to delete.
No additional parameters or headers needed.
These instructions provide clear guidance on how to perform each type of request on your API endpoints. Adjust the URL and request body as needed for your specific application.





