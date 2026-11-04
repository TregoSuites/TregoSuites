// Trego Suites — small enhancements only. The page works without this file.

// Current year in the footer.
var y = document.getElementById('year');
if (y) { y.textContent = new Date().getFullYear(); }

// Clicking "Quote the Signature" preselects that tier in the form.
document.querySelectorAll('[data-tier]').forEach(function (el) {
  el.addEventListener('click', function () {
    var select = document.getElementById('tier');
    if (!select) return;
    var want = el.getAttribute('data-tier');
    Array.prototype.forEach.call(select.options, function (opt) {
      if (opt.value === want) { select.value = want; }
    });
  });
});

// Only one FAQ answer open at a time.
var faqs = document.querySelectorAll('.faq details');
faqs.forEach(function (d) {
  d.addEventListener('toggle', function () {
    if (!d.open) return;
    faqs.forEach(function (other) { if (other !== d) { other.open = false; } });
  });
});
