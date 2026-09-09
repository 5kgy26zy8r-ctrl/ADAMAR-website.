// Generic CMS content loader.
// A page sets window.CMS_CONTENT_FILE = 'content/xyz.json' and marks
// elements with data-cms="fieldname" (and optionally data-cms-html to
// set innerHTML instead of textContent, for fields containing <br> etc).
// Homepage model cards additionally use data-cms-model="slug" so each
// card can pull from its own model's content file.
(async function () {
  async function applyContent(jsonPath, scope) {
    try {
      const res = await fetch(jsonPath);
      if (!res.ok) return;
      const data = await res.json();
      scope.forEach((el) => {
        const field = el.getAttribute('data-cms');
        if (field && data[field] !== undefined) {
          if (el.hasAttribute('data-cms-html')) {
            el.innerHTML = data[field];
          } else {
            el.textContent = data[field];
          }
        }
      });
    } catch (e) {
      console.warn('Content load failed for', jsonPath, e);
    }
  }

  if (window.CMS_CONTENT_FILE) {
    const els = Array.from(document.querySelectorAll('[data-cms]')).filter(
      (el) => !el.hasAttribute('data-cms-model')
    );
    await applyContent(window.CMS_CONTENT_FILE, els);
  }

  const modelEls = document.querySelectorAll('[data-cms-model]');
  const slugs = new Set(Array.from(modelEls).map((el) => el.getAttribute('data-cms-model')));
  for (const slug of slugs) {
    const scope = document.querySelectorAll(`[data-cms-model="${slug}"]`);
    await applyContent(`content/${slug}.json`, scope);
  }
})();
