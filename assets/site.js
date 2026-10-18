// Selettore lingua IT/EN. La lingua iniziale viene impostata dallo script
// inline nell'<head> di ogni pagina; qui si gestiscono solo i pulsanti.
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-set-lang]');

  function apply(lang, persist) {
    root.setAttribute('data-lang', lang);
    root.lang = lang;
    var title = root.getAttribute('data-title-' + lang);
    if (title) document.title = title;
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang));
    });
    if (persist) {
      try {
        localStorage.setItem('vl-lang', lang);
      } catch (e) {}
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.getAttribute('data-set-lang'), true);
    });
  });

  apply(root.getAttribute('data-lang') || 'en', false);
})();
