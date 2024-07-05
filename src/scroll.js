document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.alink');
    const navsLinks = document.querySelectorAll('.link');
    const mobMenu = document.querySelector(".mob-menu"); // Переместил объявление сюда

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Получаем id целевого элемента без #
            const targetElement = document.getElementById(targetId); // Находим целевой элемент по его id

            if (targetElement) {
                // Вычисляем позицию элемента на странице
                const offsetTop = targetElement.offsetTop;

                // Плавная прокрутка к элементу
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Плавная анимация прокрутки
                });

                // mobMenu.classList.remove("is-open");
            }
        });
    });

    navsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Получаем id целевого элемента без #
            const targetElement = document.getElementById(targetId); // Находим целевой элемент по его id

            if (targetElement) {
                // Вычисляем позицию элемента на странице
                const offsetTop = targetElement.offsetTop;

                // Плавная прокрутка к элементу
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Плавная анимация прокрутки
                });

                // mobMenu.classList.remove("is-open");
            }
        });
    });
});