window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var elements = document.querySelectorAll('.skill-container');

    elements.forEach(function(element) {
        if (scrollPosition > element.offsetTop - window.innerHeight / 2) {
            element.classList.add('fade-in');
        }
    });
});
