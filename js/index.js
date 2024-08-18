let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// document.getElementById('menu-icon').addEventListener('click', function () {
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('active');
//     });



// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    header.classList.toggle('sticky', window.scrollY > 100);

//     // Remove toggle icon and navbar when clicking navbar link (scroll)
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
 }
