document.addEventListener("includes-ready", () => {
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Load saved theme
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
});
