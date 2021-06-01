function skip() {
  console.log("skip");
  document.getElementsByClassName("ytp-ad-skip-button")[0].click();
}
setInterval(skip, 1000);
skip();
