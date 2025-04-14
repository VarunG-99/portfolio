document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        document.querySelectorAll(".section").forEach(section => {
            section.style.display = "none";
        });

        document.getElementById(sectionId).style.display = "flex";
    }

    // Ensure only the dashboard is visible on load
    showSection("dashboard");

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });

    // 🎯 Form submission redirect logic
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                window.location.href = "thankyou.html";
            } else {
                alert("Oops! Something went wrong.");
            }
        });
    }
});
