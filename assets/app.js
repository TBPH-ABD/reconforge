/* ReconForge application logic — vanilla JS, no dependencies. */
(function () {
  "use strict";

  var DATA = window.RECON_DATA || [];
  var LS = window.localStorage;

  var els = {
    target: document.getElementById("target"),
    url: document.getElementById("url"),
    search: document.getElementById("search"),
    catNav: document.getElementById("catNav"),
    cmdRoot: document.getElementById("cmdRoot"),
    empty: document.getElementById("emptyState"),
    statCmds: document.getElementById("statCmds"),
    statCats: document.getElementById("statCats"),
    themeToggle: document.getElementById("themeToggle"),
    toast: document.getElementById("toast"),
    eduRoot: document.getElementById("eduRoot"),
    aboutRoot: document.getElementById("aboutRoot")
  };

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function safeGet(key, def) { try { var v = LS.getItem(key); return v === null ? def : v; } catch (e) { return def; } }
  function safeSet(key, val) { try { LS.setItem(key, val); } catch (e) {} }

  function currentTarget() {
    var t = (els.target.value || "").trim();
    return t || "example.com";
  }
  function currentUrl() {
    var u = (els.url.value || "").trim();
    if (u) return u;
    return "https://" + currentTarget();
  }
  function fill(cmd) {
    return cmd.replace(/\{\{TARGET\}\}/g, currentTarget()).replace(/\{\{URL\}\}/g, currentUrl());
  }

  /* ---------- toast ---------- */
  var toastTimer;
  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { els.toast.classList.remove("show"); }, 1600);
  }

  /* ---------- clipboard ---------- */
  function copyText(text, cb) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { cb(true); }, function () { legacyCopy(text, cb); });
    } else {
      legacyCopy(text, cb);
    }
  }
  function legacyCopy(text, cb) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta); cb(ok);
    } catch (e) { cb(false); }
  }

  /* ---------- done state ---------- */
  var done = {};
  (function loadDone() {
    try { done = JSON.parse(safeGet("rf_done", "{}")) || {}; } catch (e) { done = {}; }
  })();
  function toolKey(catId, idx) { return catId + ":" + idx; }
  function saveDone() { safeSet("rf_done", JSON.stringify(done)); }

  /* ---------- search highlight ---------- */
  function highlight(text, q) {
    if (!q) return esc(text);
    var i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + '<span class="hl">' + esc(text.slice(i, i + q.length)) + "</span>" + esc(text.slice(i + q.length));
  }

  /* ---------- render sidebar ---------- */
  function renderNav() {
    var html = "";
    DATA.forEach(function (cat) {
      html += '<button class="cat-link" data-cat="' + cat.id + '">' +
        "<span>" + esc(cat.title) + "</span>" +
        '<span class="count">' + cat.tools.length + "</span></button>";
    });
    els.catNav.innerHTML = html;
    els.catNav.addEventListener("click", function (e) {
      var b = e.target.closest(".cat-link");
      if (!b) return;
      var block = document.getElementById("cat-" + b.getAttribute("data-cat"));
      if (block) block.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- render commands ---------- */
  function renderCommands() {
    var q = (els.search.value || "").trim().toLowerCase();
    var html = "";
    var shownCats = 0, shownCmds = 0;

    DATA.forEach(function (cat) {
      var tools = cat.tools.map(function (t, i) { return { t: t, i: i }; });
      if (q) {
        tools = tools.filter(function (o) {
          var hay = (o.t.name + " " + o.t.description + " " + o.t.commands.join(" ") + " " + cat.title).toLowerCase();
          return hay.indexOf(q) !== -1;
        });
      }
      if (!tools.length) return;
      shownCats++; shownCmds += tools.length;

      html += '<section class="cat-block" id="cat-' + cat.id + '">' +
        '<div class="cat-title"><h2>' + esc(cat.title) + "</h2>" +
        '<span class="ar" dir="rtl">' + esc(cat.titleAr) + "</span>" +
        '<span class="actions">' +
        '<button class="mini-btn" data-copyall="' + cat.id + '">Copy all</button>' +
        '<button class="mini-btn" data-export="' + cat.id + '">Export .sh</button>' +
        "</span></div>";

      html += '<div class="cmd-grid">';
      tools.forEach(function (o) {
        var t = o.t, key = toolKey(cat.id, o.i);
        var isDone = !!done[key];
        var cmd = fill(t.commands.join("\n"));
        var isRtl = /[؀-ۿ]/.test(t.description);
        html += '<article class="card' + (isDone ? " is-done" : "") + '" data-key="' + esc(key) + '">' +
          '<div class="card-head">' +
          '<div class="card-name">' + highlight(t.name, q) + "</div>" +
          '<div class="card-desc"' + (isRtl ? ' dir="rtl"' : "") + ">" + esc(t.description) + "</div>" +
          "</div>" +
          '<div class="cmd-line"><pre class="cmd-code">' + highlight(cmd, q) + "</pre></div>" +
          '<div class="card-foot">' +
          '<button class="copy-btn" data-cmd="' + esc(cmd) + '">Copy</button>' +
          '<label class="done-toggle"><input type="checkbox" ' + (isDone ? "checked" : "") + " data-done=\"" + esc(key) + '"> done</label>' +
          "</div></article>";
      });
      html += "</div></section>";
    });

    els.cmdRoot.innerHTML = html;
    els.empty.hidden = shownCats !== 0;
    els.statCmds.textContent = shownCmds;
    els.statCats.textContent = shownCats;
  }

  /* ---------- command interactions (delegated) ---------- */
  els.cmdRoot.addEventListener("click", function (e) {
    var copyBtn = e.target.closest(".copy-btn");
    if (copyBtn) {
      copyText(copyBtn.getAttribute("data-cmd"), function (ok) {
        if (ok) {
          copyBtn.textContent = "Copied";
          copyBtn.classList.add("copied");
          setTimeout(function () { copyBtn.textContent = "Copy"; copyBtn.classList.remove("copied"); }, 1200);
        } else { toast("Copy failed — select the text manually."); }
      });
      return;
    }
    var copyAll = e.target.closest("[data-copyall]");
    if (copyAll) { bulkCommands(copyAll.getAttribute("data-copyall"), false); return; }
    var exportBtn = e.target.closest("[data-export]");
    if (exportBtn) { bulkCommands(exportBtn.getAttribute("data-export"), true); return; }
  });

  els.cmdRoot.addEventListener("change", function (e) {
    var cb = e.target.closest("[data-done]");
    if (!cb) return;
    var key = cb.getAttribute("data-done");
    if (cb.checked) done[key] = 1; else delete done[key];
    saveDone();
    var card = cb.closest(".card");
    if (card) card.classList.toggle("is-done", cb.checked);
  });

  function categoryCommands(catId) {
    var cat = DATA.filter(function (c) { return c.id === catId; })[0];
    if (!cat) return "";
    return cat.tools.map(function (t) {
      return "# " + t.name + "\n" + fill(t.commands.join("\n"));
    }).join("\n\n");
  }

  function bulkCommands(catId, asFile) {
    var body = categoryCommands(catId);
    if (asFile) {
      var cat = DATA.filter(function (c) { return c.id === catId; })[0];
      var header = "#!/usr/bin/env bash\n# ReconForge — " + (cat ? cat.title : catId) +
        "\n# Target: " + currentTarget() + "\n# Authorized testing only.\nset -euo pipefail\n\n";
      var blob = new Blob([header + body + "\n"], { type: "text/x-shellscript" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "recon-" + catId + "-" + currentTarget().replace(/[^a-z0-9.-]/gi, "_") + ".sh";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
      toast("Exported " + a.download);
    } else {
      copyText(body, function (ok) { toast(ok ? "Copied all commands in phase." : "Copy failed."); });
    }
  }

  /* ---------- inputs ---------- */
  var reTimer;
  function scheduleRender() { clearTimeout(reTimer); reTimer = setTimeout(renderCommands, 90); }
  els.target.addEventListener("input", scheduleRender);
  els.url.addEventListener("input", scheduleRender);
  els.search.addEventListener("input", scheduleRender);

  // "/" focuses search
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault(); els.search.focus();
    }
  });

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    els.themeToggle.textContent = theme === "light" ? "Dark" : "Light";
    safeSet("rf_theme", theme);
  }
  applyTheme(safeGet("rf_theme", "dark"));
  els.themeToggle.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(cur === "light" ? "dark" : "light");
  });

  /* ---------- tabs ---------- */
  var views = {
    commands: document.getElementById("view-commands"),
    education: document.getElementById("view-education"),
    about: document.getElementById("view-about")
  };
  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var v = tab.getAttribute("data-view");
      document.querySelectorAll(".tab").forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      Object.keys(views).forEach(function (k) { views[k].classList.toggle("is-active", k === v); });
      window.scrollTo({ top: 0, behavior: "auto" });
      if (v === "education" && !els.eduRoot.dataset.loaded) { els.eduRoot.innerHTML = window.RECON_EDU || ""; els.eduRoot.dataset.loaded = "1"; }
      if (v === "about" && !els.aboutRoot.dataset.loaded) { els.aboutRoot.innerHTML = window.RECON_ABOUT || ""; els.aboutRoot.dataset.loaded = "1"; }
    });
  });

  /* ---------- scrollspy ---------- */
  var spyTimer;
  window.addEventListener("scroll", function () {
    if (!views.commands.classList.contains("is-active")) return;
    clearTimeout(spyTimer);
    spyTimer = setTimeout(function () {
      var blocks = document.querySelectorAll(".cat-block");
      var active = null, y = 140;
      blocks.forEach(function (b) { if (b.getBoundingClientRect().top <= y) active = b; });
      document.querySelectorAll(".cat-link").forEach(function (l) {
        l.classList.toggle("is-active", active && l.getAttribute("data-cat") === active.id.replace("cat-", ""));
      });
    }, 60);
  }, { passive: true });

  /* ---------- init ---------- */
  renderNav();
  renderCommands();
})();
