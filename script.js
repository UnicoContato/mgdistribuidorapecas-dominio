let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > 100) {
if (scrollTop > lastScrollTop) {
navbar.style.transform = 'translateY(-100%)';
} else {
navbar.style.transform = 'translateY(0)';
navbar.classList.add('bg-[#0f0f0f]/90', 'shadow-lg');
navbar.classList.remove('bg-white/5');
}
} else {
navbar.style.transform = 'translateY(0)';
navbar.classList.remove('bg-[#0f0f0f]/90', 'shadow-lg');
navbar.classList.add('bg-white/5');
}
lastScrollTop = scrollTop;
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.add('hidden');
});
});

const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtns = [document.getElementById('close-modal'), document.getElementById('close-modal-btn')];
const modalBackdrop = document.getElementById('modal-backdrop');

openModalBtn.addEventListener('click', (e) => {
e.preventDefault();
modal.classList.remove('hidden');
document.body.style.overflow = 'hidden';
});

function hideModal() {
modal.classList.add('hidden');
document.body.style.overflow = 'auto';
}

closeModalBtns.forEach(btn => {
btn.addEventListener('click', hideModal);
});

modalBackdrop.addEventListener('click', hideModal);