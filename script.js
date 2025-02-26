// Track mouse position for gradient effect
document.addEventListener('mousemove', (e) => {
    const gradientEl = document.querySelector('.gradient-hover');
    const x = e.clientX / window.innerWidth * 90;
    const y = e.clientY / window.innerHeight * 90;
    gradientEl.style.setProperty('--x', x + '%');
    gradientEl.style.setProperty('--y', y + '%');
});

// Handle image gallery effects
const gallery = document.getElementById('imageGallery');
const images = gallery.querySelectorAll('.image-container');
let currentOrder = [0, 1, 2];

// Add wheel event for image reordering when scattered
gallery.addEventListener('wheel', (e) => {
    if (window.innerWidth > 768 && gallery.matches(':hover')) {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        
        if (direction > 0) {
            currentOrder.push(currentOrder.shift());
        } else {
            currentOrder.unshift(currentOrder.pop());
        }
        
        images.forEach((img, idx) => {
            const newZIndex = 3 - currentOrder.indexOf(idx);
            img.style.zIndex = newZIndex;
        });
    }
});

// Apply hover/scatter effect
gallery.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
        gallery.classList.add('scatter-mode');
    }
});

gallery.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        gallery.classList.remove('scatter-mode');
        images[0].style.zIndex = 3;
        images[1].style.zIndex = 2;
        images[2].style.zIndex = 1;
        currentOrder = [0, 1, 2];
    }
});

// Button interaction
document.querySelector('.button').addEventListener('click', function() {
    alert("Hello! I'm Brian. Let's create something amazing together...like kids maybe?!");
});