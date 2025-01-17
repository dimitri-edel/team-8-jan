// Function to load the Navbar
function loadNavbar() {
    const currentPage = window.location.pathname.split("/").pop();

    const navbarHtml = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/logo-light.png" id="logo" alt="Logo" class="logo-img" style="width: 120px;">
                </a>
                <button class="navbar-toggler" tabindex="0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "index.html" ? "active" : ""}" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "post-generator.html" ? "active" : ""}" href="post-generator.html">Post Generator</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "learn-more.html" ? "active" : ""}" href="learn-more.html">Learn More</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "resources.html" ? "active" : ""}" href="resources.html">Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === "about.html" ? "active" : ""}" href="about.html">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    document.getElementById("navbar-placeholder").insertAdjacentHTML("afterbegin", navbarHtml);
}

// Function to load the Footer
function loadFooter() {
    const footerHtml = `
        <footer class="footer bg-dark text-white py-4">
            <div class="container text-center">
                <p>&copy; 2025 Traffick Stopper. All rights reserved.</p>
                <p>
                    <a href="resources.html" class="text-white">Resources</a> | 
                    <a href="learn-more.html" class="text-white">Learn More</a>
                </p>
            </div>
        </footer>`;
    document.getElementById("footer-placeholder").insertAdjacentHTML("beforeend", footerHtml);
}

document.addEventListener("DOMContentLoaded", function () {
    loadNavbar();
    loadFooter();
});

// Close the navbar when clicking outside
document.addEventListener("click", function (event) {
    const navbarCollapse = document.querySelector("#navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");

    const isNavbarOpen = navbarCollapse.classList.contains("show");

    if (
        isNavbarOpen &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)
    ) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true,
        });
        bsCollapse.hide();
    }
});
