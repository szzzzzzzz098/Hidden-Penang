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

document.querySelector(".play-btn").addEventListener("click", function() {
            window.open("https://youtu.be/8pDO2vBnehc?si=ts7Gbr4OSRPSwg05");
  alert("Playing Video...");
});

document.querySelector(".learn-btn").addEventListener("click", function() {
   window.open("https://www.mypenang.gov.my/about-penang/home/?lg=en", "_blank");
    alert("Redirecting to more details...");
});
