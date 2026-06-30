const slider = document.getElementById("slider");

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80"
];

if (slider) {
    let current = 0;

    setInterval(() => {
        current = (current + 1) % images.length;
        slider.src = images[current];
    }, 3000);
}

window.onload = function () {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";
    }, 3000);
};