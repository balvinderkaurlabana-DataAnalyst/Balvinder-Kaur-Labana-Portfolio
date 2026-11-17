// Add your published project URLs here when ready.
const PROJECT_LINKS = {
  vehicle: "https://vehicle-theft-dashboard-gbbmopxyrxvpwxcvzpy4kj.streamlit.app/", // Example: "https://your-vehicle-dashboard.streamlit.app"
  sales: ""    // Add your Sales Prediction project URL or GitHub repository URL
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  if (PROJECT_LINKS[key]) {
    link.href = PROJECT_LINKS[key];
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "View project ↗";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Add your published project URL in script.js to activate this link.");
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
});
