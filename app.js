(function () {
  "use strict";

  var KEY = "dutchCourse.v1";
  var PASS = 70;
  var LESSONS = window.LESSONS || [];
  var app = document.getElementById("app");
  var overall = document.getElementById("overall");
  var QUIZ = {};          // key -> items currently shown
  var state = load();
  var view = { tab: "dialoog", showEn: !!state.showEn };

  /* ---------- storage ---------- */
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.lessons) return s;
    } catch (e) { /* private mode or blocked storage */ }
    return { lessons: {}, final: null, showEn: false };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }
  function L(id) {
    var k = String(id);
    if (!state.lessons[k]) {
      state.lessons[k] = { dialoog: false, woorden: false, grammatica: false, oef: null, toets: null };
    }
    return state.lessons[k];
  }

  /* ---------- progress ---------- */
  function parts(id) {
    var l = L(id);
    return [
      { key: "dialoog", label: "Dialoog", done: l.dialoog },
      { key: "woorden", label: "Woorden", done: l.woorden },
      { key: "grammatica", label: "Grammatica", done: l.grammatica },
      { key: "oefeningen", label: "Oefeningen" + (l.oef != null ? " " + l.oef + "%" : ""), done: l.oef != null && l.oef >= PASS },
      { key: "toets", label: "Toets" + (l.toets != null ? " " + l.toets + "%" : ""), done: l.toets != null && l.toets >= PASS }
    ];
  }
  function lessonPct(id) {
    var p = parts(id), n = 0;
    p.forEach(function (x) { if (x.done) n++; });
    return Math.round(n / p.length * 100);
  }
  function totalPct() {
    if (!LESSONS.length) return 0;
    var sum = 0;
    LESSONS.forEach(function (x) { sum += lessonPct(x.id); });
    return Math.round(sum / LESSONS.length);
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[?.!,']/g, "").replace(/\s+/g, " ").trim();
  }
  function speak(text) {
    try {
      if (!("speechSynthesis" in window)) return toast("Audio is not supported here");
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "nl-NL";
      u.rate = 0.9;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) { toast("Audio is not available"); }
  }
  var toastTimer = null;
  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 1800);
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function speakBtn(text) {
    return '<button class="iconbtn" data-act="speak" data-say="' + esc(text) + '" aria-label="Listen">&#9658;</button>';
  }

  /* ---------- routing ---------- */
  function route() {
    var h = (location.hash || "#/").replace(/^#\/?/, "");
    var parts = h.split("/");
    if (parts[0] === "les" && parts[1]) {
      var id = parseInt(parts[1], 10);
      var lesson = LESSONS.filter(function (x) { return x.id === id; })[0];
      if (lesson) {
        view.tab = parts[2] || "dialoog";
        return renderLesson(lesson);
      }
    }
    if (parts[0] === "eindtoets") return renderFinal();
    return renderHome();
  }
  window.addEventListener("hashchange", function () { route(); window.scrollTo(0, 0); });

  /* ---------- home ---------- */
  function renderHome() {
    overall.textContent = "Totaal " + totalPct() + "%";
    var html = '<div class="hero"><h1>Jouw cursus</h1><p class="muted">Work through each lesson in five parts: dialogue, words, grammar, exercises and a test. A part counts as done after you open it, or when you score 70% or more.</p></div>';

    LESSONS.forEach(function (x) {
      var pct = lessonPct(x.id);
      html += '<a class="card" href="#/les/' + x.id + '">' +
        '<div class="num">' + x.id + '</div>' +
        '<div class="grow"><h2>' + esc(x.title) + '</h2>' +
        '<div class="muted small">' + esc(x.topics) + '</div>' +
        '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
        '<div class="small muted">' + pct + '% klaar</div>' +
        '<div class="chips">' + parts(x.id).map(function (p) {
          return '<span class="chip ' + (p.done ? "done" : "") + '">' + esc(p.label) + '</span>';
        }).join("") + '</div></div></a>';
    });

    var f = state.final;
    html += '<a class="card" href="#/eindtoets">' +
      '<div class="num">&#9733;</div>' +
      '<div class="grow"><h2>Eindtoets</h2>' +
      '<div class="muted small">20 random questions from all lessons. Pass at 70%.</div>' +
      '<div class="chips"><span class="chip ' + (f != null && f >= PASS ? "pass" : "") + '">' +
      (f != null ? "Beste score " + f + "%" : "Nog niet gemaakt") + '</span></div></div></a>';

    html += '<p class="muted small">Your progress is saved on this device only. Open the app in the same browser to keep it.</p>';
    app.innerHTML = html;
  }

  /* ---------- lesson ---------- */
  function renderLesson(x) {
    overall.textContent = "Les " + x.id + " van " + LESSONS.length;
    var tabs = [
      ["dialoog", "Dialoog"], ["woorden", "Woorden"], ["grammatica", "Grammatica"],
      ["oefeningen", "Oefeningen"], ["toets", "Toets"]
    ];
    var html = '<a class="back" href="#/">&larr; Overzicht</a>' +
      '<h1>Les ' + x.id + ': ' + esc(x.title) + '</h1>' +
      '<p class="muted small">' + esc(x.topics) + '</p>' +
      '<nav class="tabs">' + tabs.map(function (t) {
        return '<button class="tab ' + (view.tab === t[0] ? "on" : "") + '" data-act="tab" data-lesson="' + x.id + '" data-tab="' + t[0] + '">' + t[1] + '</button>';
      }).join("") + '</nav>';

    var l = L(x.id);
    if (view.tab === "dialoog") {
      l.dialoog = true; save();
      html += dialogueHTML(x);
    } else if (view.tab === "woorden") {
      l.woorden = true; save();
      html += vocabHTML(x);
    } else if (view.tab === "grammatica") {
      l.grammatica = true; save();
      html += grammarHTML(x);
    } else if (view.tab === "oefeningen") {
      html += '<p class="muted">Answer every question, then press Nakijken. Your best score counts for the lesson.</p>' +
        quizHTML("l" + x.id + "oef", x.ex, l.oef, "Oefeningen");
    } else {
      html += '<p class="muted">Test yourself. You need 70% to pass this lesson.</p>' +
        quizHTML("l" + x.id + "toets", x.exam, l.toets, "Toets");
    }

    // navigation to next part
    var idx = tabs.map(function (t) { return t[0]; }).indexOf(view.tab);
    var nextLink = idx < tabs.length - 1
      ? '<button class="btn ghost" data-act="tab" data-lesson="' + x.id + '" data-tab="' + tabs[idx + 1][0] + '">Volgende: ' + tabs[idx + 1][1] + ' &rarr;</button>'
      : (x.id < LESSONS.length
        ? '<a class="btn" href="#/les/' + (x.id + 1) + '">Volgende les &rarr;</a>'
        : '<a class="btn" href="#/eindtoets">Naar de eindtoets &rarr;</a>');
    html += '<div class="panel" style="text-align:right">' + nextLink + '</div>';

    app.innerHTML = html;
    QUIZ.current = view.tab === "oefeningen" ? { key: "l" + x.id + "oef", items: x.ex, lesson: x.id, kind: "oef" }
      : view.tab === "toets" ? { key: "l" + x.id + "toets", items: x.exam, lesson: x.id, kind: "toets" }
      : null;
  }

  function dialogueHTML(x) {
    var html = '<div class="panel"><div class="row" style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">' +
      '<span class="muted small">Listen, then read along. Tap the play button for audio.</span>' +
      '<button class="btn small-btn ghost" data-act="toggleEn">' + (view.showEn ? "Verberg vertaling" : "Toon vertaling") + '</button></div>';
    x.dialogue.forEach(function (ln) {
      html += '<div class="line"><div class="speaker"><span>' + esc(ln.s) + '</span>' + speakBtn(ln.nl) + '</div>' +
        '<p class="nl">' + esc(ln.nl) + '</p>' +
        (view.showEn ? '<p class="en">' + esc(ln.en) + '</p>' : '') + '</div>';
    });
    html += '</div>';
    return html;
  }

  function vocabHTML(x) {
    var html = '<div class="panel"><p class="muted small">Tap a word to see the meaning and an example. Learn the article with each noun.</p>';
    x.vocab.forEach(function (v) {
      html += '<details class="word"><summary><span class="art">' + esc(v.a) + '</span><span class="wtext">' + esc(v.w) + '</span></summary>' +
        '<div class="detail"><b>' + esc(v.en) + '</b><br>' + esc(v.ex) + '<br>' +
        '<button class="btn small-btn ghost" style="margin-top:6px" data-act="speak" data-say="' + esc(v.ex) + '">Luister</button></div></details>';
    });
    html += '</div>';
    return html;
  }

  function grammarHTML(x) {
    var html = '';
    x.grammar.forEach(function (g) {
      html += '<section class="panel gram"><h3>' + esc(g.t) + '</h3>';
      (g.p || []).forEach(function (para) { html += '<p>' + esc(para) + '</p>'; });
      if (g.tb) {
        html += '<div style="overflow-x:auto"><table class="grid">';
        g.tb.forEach(function (row, i) {
          html += '<tr>' + row.map(function (c) {
            return i === 0 ? '<th>' + esc(c) + '</th>' : '<td>' + esc(c) + '</td>';
          }).join("") + '</tr>';
        });
        html += '</table></div>';
      }
      if (g.ex && g.ex.length) {
        html += '<p class="muted small" style="margin-bottom:2px">Examples</p><ul class="ex">' +
          g.ex.map(function (e) { return '<li>' + esc(e[0]) + ' <span class="en2">(' + esc(e[1]) + ')</span></li>'; }).join("") +
          '</ul>';
      }
      html += '</section>';
    });
    return html;
  }

  /* ---------- quizzes ---------- */
  function quizHTML(key, items, best, label) {
    QUIZ[key] = items;
    var html = '<div class="panel quiz" data-key="' + key + '">';
    items.forEach(function (it, i) {
      html += '<div class="q" data-i="' + i + '"><p class="qn">' + (i + 1) + '. ' + esc(it.q) + '</p>';
      if (it.t === "mc") {
        html += '<div class="opts">' + shuffle(it.o).map(function (o) {
          return '<button type="button" class="opt" data-act="opt" data-v="' + esc(o) + '">' + esc(o) + '</button>';
        }).join("") + '</div>';
      } else {
        html += '<input class="ans" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Typ je antwoord">';
      }
      html += '<div class="fb"></div></div>';
    });
    html += '<div class="qbar"><button class="btn" data-act="grade" data-key="' + key + '">Nakijken</button>' +
      '<span class="score" id="score-' + key + '">' + (best != null ? "Beste: " + best + "%" : "") + '</span></div>' +
      '<div class="verdict" id="verdict-' + key + '"></div></div>';
    return html;
  }

  function grade(key) {
    var items = QUIZ[key];
    var box = document.querySelector('.quiz[data-key="' + key + '"]');
    if (!items || !box) return;
    var correct = 0;
    var qs = box.querySelectorAll(".q");
    items.forEach(function (it, i) {
      var q = qs[i];
      var val = "";
      var ok = false;
      q.classList.remove("ok", "bad");
      q.querySelectorAll(".opt").forEach(function (b) { b.classList.remove("right"); });
      var fb = q.querySelector(".fb");
      if (it.t === "mc") {
        var sel = q.querySelector(".opt.sel");
        val = sel ? sel.getAttribute("data-v") : "";
        ok = val === it.a;
        q.querySelectorAll(".opt").forEach(function (b) {
          if (b.getAttribute("data-v") === it.a) b.classList.add("right");
        });
      } else {
        val = q.querySelector("input").value;
        ok = it.a.map(norm).indexOf(norm(val)) !== -1;
      }
      if (ok) correct++;
      q.classList.add(ok ? "ok" : "bad");
      var answer = it.t === "mc" ? it.a : it.a[0];
      fb.innerHTML = ok
        ? "Juist. " + esc(it.e || "")
        : "Fout. Juist antwoord: <b>" + esc(answer) + "</b>. " + esc(it.e || "");
      if (!val && it.t === "mc") fb.innerHTML = "Je hebt geen antwoord gekozen. Juist: <b>" + esc(answer) + "</b>. " + esc(it.e || "");
    });
    var pct = Math.round(correct / items.length * 100);
    document.getElementById("score-" + key).textContent = correct + " van " + items.length + " (" + pct + "%)";
    var verdict = document.getElementById("verdict-" + key);

    var cur = QUIZ.current || {};
    if (key === "final") {
      state.final = Math.max(state.final || 0, pct);
      verdict.textContent = pct >= PASS ? "Geslaagd. Goed gedaan!" : "Nog niet. Je hebt 70% nodig.";
    } else if (cur.key === key && cur.kind === "oef") {
      var l = L(cur.lesson);
      l.oef = Math.max(l.oef || 0, pct);
      verdict.textContent = pct >= PASS ? "Oefeningen gehaald." : "Nog niet. Oefen de fouten en probeer opnieuw.";
    } else if (cur.key === key && cur.kind === "toets") {
      var t = L(cur.lesson);
      t.toets = Math.max(t.toets || 0, pct);
      verdict.textContent = pct >= PASS ? "Geslaagd voor de toets!" : "Niet geslaagd. Lees de grammatica nog eens en probeer opnieuw.";
    }
    save();
    verdict.style.color = pct >= PASS ? "var(--ok)" : "var(--bad)";
    overall.textContent = (QUIZ.current && QUIZ.current.lesson) ? "Les " + QUIZ.current.lesson + " van " + LESSONS.length : "Totaal " + totalPct() + "%";
  }

  /* ---------- final exam ---------- */
  function renderFinal(newRound) {
    overall.textContent = "Eindtoets";
    var pool = [];
    LESSONS.forEach(function (x) { pool = pool.concat(x.exam); });
    var items = shuffle(pool).slice(0, Math.min(20, pool.length));
    QUIZ.current = { key: "final", items: items, kind: "final" };
    var html = '<a class="back" href="#/">&larr; Overzicht</a>' +
      '<h1>Eindtoets</h1>' +
      '<p class="muted">20 random questions from all lessons. You need 70% to pass.</p>' +
      quizHTML("final", items, state.final, "Eindtoets") +
      '<div class="panel" style="text-align:center"><button class="btn ghost" data-act="newfinal">Nieuwe set vragen</button></div>';
    app.innerHTML = html;
  }

  /* ---------- events ---------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (!el) return;
    var act = el.getAttribute("data-act");
    if (act === "speak") {
      e.preventDefault();
      speak(el.getAttribute("data-say"));
    } else if (act === "tab") {
      view.tab = el.getAttribute("data-tab");
      var target = "#/les/" + el.getAttribute("data-lesson") + "/" + view.tab;
      if (location.hash === target) route();
      else location.hash = target;
      window.scrollTo(0, 0);
    } else if (act === "toggleEn") {
      view.showEn = !view.showEn;
      state.showEn = view.showEn; save();
      route();
    } else if (act === "opt") {
      var q = el.closest(".q");
      q.querySelectorAll(".opt").forEach(function (b) { b.classList.remove("sel"); });
      el.classList.add("sel");
    } else if (act === "grade") {
      grade(el.getAttribute("data-key"));
    } else if (act === "newfinal") {
      renderFinal(true);
    }
  });

  // Keep the Enter key on a text answer useful: grade the quiz.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target && e.target.classList && e.target.classList.contains("ans")) {
      var box = e.target.closest(".quiz");
      if (box) {
        var btn = box.querySelector('[data-act="grade"]');
        if (btn) { e.preventDefault(); btn.click(); }
      }
    }
  });

  route();
})();
