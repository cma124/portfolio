let theme = localStorage.getItem('portfolio-theme');

$(document).ready(function () {
    $('#img-sun').hide();

    if (theme === 'dark') {
        toggleTheme();
    }

    $('#btn-mode').click(function () {
        theme = theme === 'dark' ? null : 'dark';
        localStorage.setItem('portfolio-theme', theme);

        toggleTheme();
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});

function toggleTheme() {
    $('#img-sun').toggle();
    $('#img-moon').toggle();

    $('section').toggleClass('bg-dark text-white');
    $('section a').toggleClass('text-info');

    $('.skill').toggleClass('bg-white');
    $('.skill').toggleClass('bg-black');

    $('.card-body').toggleClass('bg-black');
    $('.card-body').toggleClass('text-white');

    $('.accordion-body').toggleClass('bg-black text-white');

    $('.footer').toggleClass('bg-dark text-white');
    $('.footer a').toggleClass('text-info');
}