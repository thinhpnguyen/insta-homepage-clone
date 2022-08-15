(function main() {
  let currImage = document.getElementById("1");
  let prev = document.getElementById("1");
  setTimeout(() => {
    setInterval(() => {
      let next = document.getElementById(currImage.dataset.next);

      //only two images will be visible at a time
      //previous image will fade out
      //while new one will fade in

      prev.classList.remove("last-active");
      currImage.classList.replace("active", "last-active"); //used for fade out
      prev = currImage;
      currImage = next;
      currImage.classList.add("active");
    }, 5000);
  }, 2000);
})();
