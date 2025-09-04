document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      const currentPath = window.location.pathname.split("/").pop();
      document.querySelectorAll("#header nav a").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        }
      });

      const hamburger = document.querySelector("#header .hamburger");
      const navbar = document.querySelector("#header .navbar");
      if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
          navbar.classList.toggle("show");
        });
      }
    });

    fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

    const popup = document.getElementById("imagePopup");
    const popupImg = popup ? popup.querySelector("img") : null;

    document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" && e.target.closest(".success, .participation, .projects")) {
        popupImg.src = e.target.src;
        popup.classList.add("show");
    } else if (popup && (e.target === popup || e.target === popupImg)) {
        popup.classList.remove("show");
    }
    });
});
