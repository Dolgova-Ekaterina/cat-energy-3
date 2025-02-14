/* в этот файл добавляет скрипты*/
// const closeButton = document.querySelector('.header__button--clouse');
const openButton = document.querySelector('.header__button');
const nav = document.querySelector('nav');

// Функция для удаления класса nav--cloused
openButton.addEventListener('click', (evt) => {
    if(nav.classList.contains('nav--cloused')) {
        nav.classList.remove('nav--cloused');       
        openButton.classList.add('header__button--clouse');

    }else {
     nav.classList.add('nav--cloused');
     openButton.classList.remove('header__button--clouse');
    }
});

// closeButton.addEventListener('click', (evt) => {
//     closeButton.classList.remove('header__button--clouse');
//     nav.classList.add('nav--cloused');
// });
// header__button--clouse добаыит когда открыто меню