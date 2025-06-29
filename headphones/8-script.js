
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navList = document.querySelector(".nav-list");

    hamburger.addEventListener("click", function () {
      navList.classList.toggle("show");
    });

    // Optional: hide menu after clicking a link (better UX)
    document.querySelectorAll(".nav-list a").forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("show");
      });
    });
  });
