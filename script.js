/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Simple script to manage active navigation links based on the current page.
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        // Remove active class from all links first
        link.classList.remove('active');

        // Add active class to the link corresponding to the current page
        if ((currentPage === '' || currentPage === 'index.html') && link.getAttribute('href') === 'index.html') {
            // Handle root path for index.html
            link.classList.add('active');
        } else if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
