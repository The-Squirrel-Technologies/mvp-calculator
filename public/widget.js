/*! The Squirrel Technologies - MVP & AI Cost Calculator embed (MIT) */
(function () {
  var ORIGIN = "https://mvp-calculator.thesquirrel.tech";
  var targets = document.querySelectorAll("[data-squirrel-mvp]");
  if (!targets.length) return;

  var frames = [];
  targets.forEach(function (el) {
    if (el.getAttribute("data-squirrel-ready")) return;
    el.setAttribute("data-squirrel-ready", "1");
    var f = document.createElement("iframe");
    f.src = ORIGIN + "/embed/";
    f.title = "MVP & AI Cost Calculator by The Squirrel Technologies";
    f.loading = "lazy";
    f.width = "100%";
    f.height = "1500";
    f.style.cssText = "border:0;width:100%;max-width:1100px;border-radius:16px;display:block;margin:0 auto";
    el.insertBefore(f, el.firstChild);
    frames.push(f);
  });

  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGIN || !e.data || e.data.type !== "squirrel-mvp-height") return;
    frames.forEach(function (f) {
      if (f.contentWindow === e.source) f.height = String(Math.ceil(Number(e.data.height)) || 1500);
    });
  });
})();
