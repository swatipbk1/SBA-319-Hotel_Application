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