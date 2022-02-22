let menu = document.querySelector('#menu-bars'),
    navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });

}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-from').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-from').classList.toggle('active');
}

// Dark Mode

let light = document.querySelector('#light'),
    dark = document.querySelector('#dark');

function darkMode() {
    document.documentElement.style.setProperty('--thulian', '#ff9300');
    document.documentElement.style.setProperty('--black', '#fff');
    document.documentElement.style.setProperty('--light', '#252b43');
    document.documentElement.style.setProperty('--box-shadow', '0 .5rem 1.5rem rgba(225, 225, 225, .3)');
}

function lightMode() {
    document.documentElement.style.setProperty('--thulian', '#dd88a1');
    document.documentElement.style.setProperty('--black', '#1d2029');
    document.documentElement.style.setProperty('--light', '#fff');
    document.documentElement.style.setProperty('--box-shadow', '0 .5rem 1.5rem rgba(0, 0, 0, .3)');
}

light.onclick = () => {
    light.classList.remove('show'),
        light.classList.add('haid'),
        dark.classList.add("show")
    lightMode()
}

dark.onclick = () => {
    dark.classList.remove('show'),
        dark.classList.add('haid'),
        light.classList.add("show")
    darkMode()
}