/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const advDiv = document.querySelector('.promo__adv'),
    ads = advDiv.querySelectorAll('img'),
    promoDiv = document.querySelector('.promo__bg'),
    promoGenre = promoDiv.querySelector('.promo__genre'),
    watchedList = document.querySelector('.promo__interactive-list'),
    deleteButtons = watchedList.querySelectorAll('.delete'),
    addForm = document.querySelector('.add'),
    inputMovie = addForm.querySelector('.adding__input'),
    addButton = addForm.lastElementChild,
    loveCheckBox = addForm.querySelector('[type="checkbox"]');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    updateMovies: function() {
        watchedList.innerHTML = '';
        this.movies.map((item) => item.toUpperCase()).sort().forEach((item, i) => watchedList.insertAdjacentHTML("beforeend", `
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>`));
    }
};

// удаление рекламы
ads.forEach(item => item.remove());

// изменение жанра
promoGenre.textContent = 'драма';

// и обоев
promoDiv.style.backgroundImage = 'url(img/bg.jpg)';

// интерактивный список
movieDB.updateMovies();

// добавление фильмов в список
addButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputMovie.value && inputMovie.value.length <= 21) {
        movieDB.movies.push(inputMovie.value);
    } else if (inputMovie.value.length >21) {
        movieDB.movies.push(inputMovie.value.slice(0, 20) + '...');
    }
    if (loveCheckBox.checked) {
        console.log('Добавляем любимый фильм');
    }    
    movieDB.updateMovies();
    inputMovie.value = '';
    loveCheckBox.checked = false;
});

// удаление фильмов
watchedList.addEventListener('click', function(event) {
    if (event.target.className === 'delete') {
        movieDB.movies.splice((+event.target.parentElement.textContent.slice(0,1) - 1), 1);
        movieDB.updateMovies();
    }
});