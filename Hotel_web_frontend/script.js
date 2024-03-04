document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.querySelector(".explore_btn");
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            // Make an AJAX request to fetch menu items from the server
            fetch('../server.js/menu')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch menu items');
                    }
                    return response.json();
                })
                .then(menuItems => {
                    // Handle the retrieved menu items
                    console.log('Menu items:', menuItems);
                    // Example: Display the menu items in the console
                })
                .catch(error => {
                    console.error('Error fetching menu items:', error);
                    // Example: Display an error message to the user
                });
        });
    } else {
        console.error("Button with class 'explore_btn' not found.");
    }
});