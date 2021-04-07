let currentURL = location.href;
window.onclick = function () {
  if (currentURL !== location.href) {
    currentURL = location.href;
    updateUrlIfNeeded();
  }
};

function updateUrlIfNeeded() {
  if (!currentURL.match(/github.com\/.*\/.*\/pull\/.*\/(files|commits)/)) {
    return;
  }
  const url = new URL(location);
  if (url.searchParams.get("w")) return;
  url.searchParams.set("w", "1");
  window.history.replaceState(null, null, url.toString());
  location.reload();
}

updateUrlIfNeeded();
