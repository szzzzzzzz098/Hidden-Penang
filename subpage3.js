// Get the current page URL
        let currentPage = window.location.pathname.split("/").pop();

        // Find all navigation links
        let navLinks = document.querySelectorAll(".nav-link");

        // Loop through links & check if href matches the current page
        navLinks.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active"); // Add "active" class
            }
        });
