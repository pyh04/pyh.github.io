// script.js
const banner = document.querySelector('.banner');
const bannerInner = banner.querySelector('.banner-inner');
const items = banner.querySelectorAll('.banner-item');
const prevButton = banner.querySelector('.prev');
const nextButton = banner.querySelector('.next');

let currentIndex = 0;
let autoSlideInterval = null;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
    bannerInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

prevButton.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
    startAutoSlide();
});

nextButton.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
    startAutoSlide();
});

// 初始化轮播图
showSlide(currentIndex);
startAutoSlide();