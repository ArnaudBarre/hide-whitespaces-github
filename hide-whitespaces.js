let currentURL = location.href;
window.onclick = function () {
  if (currentURL !== location.href) {
    currentURL = location.href;
    updateUrlIfNeeded();
  }
};

function updateUrlIfNeeded() {
  if (
    currentURL.match(/github.com\/.*\/.*\/pull\/.*\/files/) &&
    !location.search
  ) {
    console.log("Hiding whitespaces change");
    location.search = "?diff=split&w=1";
  }
}

updateUrlIfNeeded();
