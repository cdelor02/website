
document.addEventListener("includes-loaded", () => {
  const link = document.querySelector(".lang-link");
  if (!link) return;

  const current = window.location.pathname.split("/").pop();

  let target;
  let label;

  if (current.endsWith("_fr.html")) {
    target = current.replace("_fr.html", ".html");
    label = "English";
  } else {
    target = current.replace(".html", "_fr.html");
    label = "Français";
  }

  link.href = target;
  link.textContent = label;
});




// window.addEventListener("load", () => {
//   const link = document.querySelector(".lang-link");
//   if (!link) return;

//   const current = window.location.pathname.split("/").pop();

//   let target;
//   let label;

//   if (current.endsWith("_fr.html")) {
//     target = current.replace("_fr.html", ".html");
//     label = "English";
//   } else {
//     target = current.replace(".html", "_fr.html");
//     label = "Français";
//   }

//   link.href = target;
//   link.textContent = label;
// });










// document.addEventListener("DOMContentLoaded", () => {
//   const langLink = document.querySelector(".lang-link");
//   if (!langLink) return;

//   const current = window.location.pathname.split("/").pop();

//   let target;

//   if (current.endsWith("_fr.html")) {
//     // French → English
//     target = current.replace("_fr.html", ".html");
//     langLink.textContent = "English";
//   } else {
//     // English → French
//     const parts = current.split(".html");
//     target = parts[0] + "_fr.html";
//     langLink.textContent = "Français";
//   }

//   langLink.href = target;
// });
