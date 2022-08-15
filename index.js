(function main() {
  let currImage = document.getElementById("1");
  let prev = document.getElementById("1");

  let prevTime;
  const interval = 5000;

  function step(timestamp) {
    if (prevTime === undefined) prevTime = timestamp;
    const elapsed = timestamp - prevTime;
    if (elapsed >= interval) {
      //only two images will be visible at a time
      //previous image will fade out
      //while new one will fade in
      const next = document.getElementById(currImage.dataset.next);
      prev.classList.remove("last-active");
      currImage.classList.replace("active", "last-active"); //used for fade out
      prev = currImage;
      currImage = next;
      currImage.classList.add("active");
      prevTime = timestamp;
    }
    window.requestAnimationFrame(step);
  }

  //wait a while before starting to show different images
  setTimeout(() => {
    window.requestAnimationFrame(step);
  }, 2000);
})();
