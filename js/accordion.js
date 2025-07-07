document.addEventListener('DOMContentLoaded', function() {
    var accordion = document.querySelectorAll('.js-acordion');

    accordion.forEach(function(item) {
        item.addEventListener("click", function() {
            this.classList.toggle('is-active');
        });
    });
});