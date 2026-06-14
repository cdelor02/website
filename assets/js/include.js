
async function loadIncludes() {
  const includeElements = document.querySelectorAll("[data-include]");
  const promises = [];

  includeElements.forEach(el => {
    const file = el.getAttribute("data-include");
    const p = fetch(file)
      .then(response => response.text())
      .then(html => {
        el.outerHTML = html;
      });
    promises.push(p);
  });

  // When all includes are done, fire an event
  Promise.all(promises).then(() => {
    document.dispatchEvent(new Event("includes-loaded"));
  });
}

document.addEventListener("DOMContentLoaded", loadIncludes);




// document.querySelectorAll("[data-include]").forEach(async el => {
//   const file = el.getAttribute("data-include");
//   const response = await fetch(file);
//   const html = await response.text();
//   el.outerHTML = html;
// });
