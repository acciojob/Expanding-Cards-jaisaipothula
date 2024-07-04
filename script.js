//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll(".panel");

    // Initially expand the first panel
    panels[0].classList.add("active");

    // Add click event listeners to all panels
    panels.forEach(function(panel, index) {
        panel.addEventListener("click", function() {
            // Remove active class from all panels
            panels.forEach(function(panel) {
                panel.classList.remove("active");
            });

            // Add active class to the clicked panel
            this.classList.add("active");
        });
    });
});
