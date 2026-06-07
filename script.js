/*const title = document.getElementById("cool-title");

title.addEventListener("DOM", () => {
    title.style.color = "darkgreen";
});

title.addEventListener("mouseout", () => {
  title.style.color = "";
});
*/
document.addEventListener("DOMContentLoaded",  () => {
  const textElement = document.getElementById("cool-title");

  setInterval(() => {
    textElement.style.color =
      textElement.style.color === "green" ? "black" : "green";
  }, 500);
});



const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

