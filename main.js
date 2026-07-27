/* Venturable Foundation — shared behaviour
   Small, dependency-free. Runs on every page. */

(function () {
  "use strict";

  /* The nav is a persistent top bar — no toggle to wire up. It wraps to more
     rows on narrow screens rather than collapsing behind a menu button. */

  /* ---- Mark the current page in the nav ---- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === here) a.setAttribute("aria-current", "page");
  });

  /* ---- Forms ----
     These are front-end only. Until a form backend is connected (see README),
     submitting shows a confirmation instead of sending anything. */
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      if (status) {
        status.hidden = false;
        status.textContent = form.dataset.demoForm;
        status.focus && status.focus();
      }
      form.reset();
    });
  });

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
