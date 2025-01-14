// Get elements
const toggleButton = document.getElementById('toggle');
const navMenu = document.querySelector('nav ul');
const modalContainer = document.getElementById('modal');
const openModalButton = document.getElementById('open');
const closeModalButton = document.getElementById('close');

// Toggle navbar menu
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleButton.classList.toggle('open');
});

// Open modal
openModalButton.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
});

// Close modal
closeModalButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

// Close modal when clicking outside of it
modalContainer.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});
