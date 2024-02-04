document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content');
    content.style.opacity = 0;
    fadeIn(content, 0.5); // Adjust the duration as needed
});

function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 10;
    const delta = interval / duration;

    function increaseOpacity() {
        opacity += delta;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fadeInterval);
        }
    }

    const fadeInterval = setInterval(increaseOpacity, interval);
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(createHeart, 500); // Adjust the interval as needed
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // Use a heart emoji

    // Set random position within the whole document
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;

    // Append heart to content
    document.body.appendChild(heart);

    // Remove heart after animation completes
    heart.addEventListener('animationend', function() {
        heart.remove();
    });
}


function showMessage(answer) {
    alert(`You said ${answer}! Thank you for being my Valentine! ❤️`);
}

function moveNoButton() {
    const button = document.getElementById('noButton');
    const buttonRect = button.getBoundingClientRect();

    // Define your custom dimensions for movement
    const customWidth = 800;  // Adjust as needed
    const customHeight = 600; // Adjust as needed

    // Calculate the maximum allowable positions based on custom dimensions
    const maxX = customWidth - buttonRect.width;
    const maxY = customHeight - buttonRect.height;

    // Generate random positions within the specified area
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Ensure the button stays within the specified area
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
