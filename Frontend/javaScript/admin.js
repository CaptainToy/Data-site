document.addEventListener("DOMContentLoaded", () => {
  // Toggle notification dropdown
  document.querySelectorAll(".notification-drop .item").forEach(item => {
    item.addEventListener('click', () => {
      const dropdown = item.querySelector('ul');
      if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    });
  });

  // Sidebar and mode switch functionality
  const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
  });

  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      modeText.innerText = "Light mode";
      sidebar.classList.add("white");
    } else {
      modeText.innerText = "Dark mode";
      sidebar.classList.remove("white");
    }
  });
});
