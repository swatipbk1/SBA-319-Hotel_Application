const invoices = [
  {
    "guestId": "611fe1e22ac1a80021b02d42",
    "items": [
      {
        "name": "Room Service Breakfast",
        "description": "Continental breakfast",
        "quantity": 1,
        "price": 15.99
      },
      {
        "name": "Laundry Service",
        "description": "Washing and ironing",
        "quantity": 2,
        "price": 10.50
      }
    ],
    "totalAmount": 37.99,
    "status": "pending"
  },
  {
    "guestId": "611fe1e22ac1a80021b02d42",
    "items": [
      {
        "name": "Dinner Buffet",
        "description": "All-you-can-eat buffet",
        "quantity": 1,
        "price": 25.99
      },
      {
        "name": "Spa Treatment",
        "description": "60-minute massage",
        "quantity": 1,
        "price": 50.00
      }
    ],
    "totalAmount": 75.99,
    "status": "paid"
  },
  {
    "guestId": "611fe1e22ac1a80021b02d43",
    "items": [
      {
        "name": "Mini Bar",
        "description": "Assorted snacks and beverages",
        "quantity": 1,
        "price": 20.50
      }
    ],
    "totalAmount": 20.50,
    "status": "void"
  }
];

module.exports = invoices;
