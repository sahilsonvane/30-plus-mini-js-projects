let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const intervalTime = 3000; 
let interval;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

function startSlider() {
    interval = setInterval(nextImage, intervalTime);
}

function stopSlider() {
    clearInterval(interval);
}

// functions for horizontel scroll

let scrollContainer = document.querySelector(".gallery");
let preBtn = document.getElementById("prebtn");
let nxtBtn = document.getElementById("nxtbtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

preBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";

  scrollContainer.scrollLeft -= 1000;
});

nxtBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";

  scrollContainer.scrollLeft += 1000;
});

// Initial display
showImage(currentIndex);
startSlider();
document.addEventListener('mouseover', stopSlider);
document.addEventListener('mouseout', startSlider);
