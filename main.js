// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navMenu = document.querySelector("nav ul");

//     menuToggle.addEventListener("click", function() {
//         navMenu.classList.toggle("active");
//     });
// });

// Select elements
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

// Open Mobile Menu
hamburger.addEventListener("click", () => {
    mobileNav.style.right = "0";
});

// Close Mobile Menu
closeBtn.addEventListener("click", () => {
    mobileNav.style.right = "-250px";
});


const testimonials = document.querySelector(".testimonial-list");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalItems = document.querySelectorAll(".testimonial-item").length;

function updateCarousel() {
    testimonials.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Next Button
nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalItems;
    updateCarousel();
});

// Prev Button
prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
});

// Dot Navigation
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
});

// Auto-Slide Every 5 Seconds
setInterval(() => {
    index = (index + 1) % totalItems;
    updateCarousel();
}, 5000);
