document.getElementById('menu-icon').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    } else {
        navMenu.classList.add('show');
    }
});