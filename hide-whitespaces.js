let currentURL = location.href;

function updateUrlIfNeeded() {
  if (
    !currentURL.match(/github.com\/.*\/.*\/(pull\/.*\/(files|commits))|compare/)
  ) {
    return;
  }
  const url = new URL(location);
  if (url.searchParams.get("w")) return;
  url.searchParams.set("w", "1");
  window.history.replaceState(null, null, url.toString());
  location.reload();
}

window.onload = function () {
  new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (currentURL !== location.href) {
        currentURL = location.href;
        updateUrlIfNeeded();
      }
    });
  }).observe(document.querySelector("body"), {
    childList: true,
    subtree: true,
  });
};

updateUrlIfNeeded();
