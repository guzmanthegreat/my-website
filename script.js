//dark/light theme logic
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  // Check saved theme when page loads
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Stop here if this page does not have the button
  if (!themeToggle) {
    return;
  }

  // Change theme when button is clicked
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
      themeToggle.style.backgroundColor = "#ffd7b2";


    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
      themeToggle.style.backgroundColor = "#222";
    }
  });

  // Set correct icon when page loads
  if (document.body.classList.contains("dark-theme")) {
    themeToggle.textContent = "☀️";
    themeToggle.style.backgroundColor = "#ffd7b2";

  } else {
    themeToggle.textContent = "🌙";
    themeToggle.style.backgroundColor = "#222";

  }

});

//loader screen logic
window.addEventListener("load", function () {
  const loaderWrapper = document.getElementById("loader-wrapper");
  const content = document.getElementById("content");

  if (loaderWrapper) {
    loaderWrapper.style.display = "none";
  }

  if (content) {
    content.style.display = "flex";
  }
});

//title page flash logic
const homepageTitle = document.getElementById("homepage-title")
setInterval(() => {
  homepageTitle.style.visibility =
    homepageTitle.style.visibility === "hidden"
      ? "visible"
      : "hidden";
}, 300);

document.getElementById("quote-button").addEventListener("click", function() {
  alert('The best way to predict the future is to invent it. - Alan Kay');
});