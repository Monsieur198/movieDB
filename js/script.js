/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advDiv = document.querySelector('.promo__adv'),
    ads = advDiv.querySelectorAll('img'),
    promoDiv = document.querySelector('.promo__bg'),
    promoGenre = promoDiv.querySelector('.promo__genre'),
    watchedList = document.querySelector('.promo__interactive-list');    

// удаление рекламы
ads.forEach(item => item.remove());

// изменение жанра
promoGenre.textContent = 'драма';

// и обоев
promoDiv.style.backgroundImage = 'url(img/bg.jpg)';

// интерактивный список
watchedList.innerHTML = '';
movieDB.movies.sort().forEach((item, i) => watchedList.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${i+1}. ${item}</li>`));



