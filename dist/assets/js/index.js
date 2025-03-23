document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider img');

    function changeImage() {
        images[currentIndex].classList.remove('active'); // Remove active class from current image
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
        images[currentIndex].classList.add('active'); // Add active class to next image
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});


