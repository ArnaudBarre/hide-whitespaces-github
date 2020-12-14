let currentURL = location.href;
window.onclick = function () {
  if (currentURL !== location.href) {
    currentURL = location.href;
    updateUrlIfNeeded();
  }
};

function updateUrlIfNeeded() {
  if (!currentURL.match(/github.com\/.*\/.*\/pull\/.*\/files/)) return;
  const search = new URLSearchParams(location.search);
  if (search.get("w")) return;
  search.set("w", "1");
  window.history.replaceState(
    null,
    null,
    `${location.href}?${search.toString()}`,
  );
  location.reload();
}

updateUrlIfNeeded();
