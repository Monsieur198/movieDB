'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const advDiv = document.querySelector('.promo__adv'),
        ads = advDiv.querySelectorAll('img'),
        promoDiv = document.querySelector('.promo__bg'),
        promoGenre = promoDiv.querySelector('.promo__genre'),
        watchedList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add'),
        inputMovie = addForm.querySelector('.adding__input'),
        loveCheckbox = addForm.querySelector('[type="checkbox"]');

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
            this.movies = this.movies.map((item) => item.toUpperCase()).sort();
            this.movies.forEach((item, i) => watchedList.insertAdjacentHTML("beforeend", `
                <li class="promo__interactive-item">${i+1}. ${item}
                    <div class="delete"></div>
                </li>`));
                
            watchedList.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    movieDB.updateMovies();
                });
            });
        }
    };

    const pageFixes = () => {
        ads.forEach(item => item.remove());                     // удаление рекламы    
        promoGenre.textContent = 'драма';                       // изменение жанра    
        promoDiv.style.backgroundImage = 'url(img/bg.jpg)';     // и обоев    
        movieDB.updateMovies();                                 // интерактивный список
    };

    pageFixes();

    // добавление фильмов в список
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (inputMovie.value && inputMovie.value.length <= 21) {
            movieDB.movies.push(inputMovie.value);
        } else if (inputMovie.value.length >21) {
            movieDB.movies.push(`${inputMovie.value.slice(0, 21)}...`);
        }
        if (loveCheckbox.checked) {
            console.log('Добавляем любимый фильм');
        }    
        movieDB.updateMovies();
        addForm.reset();
    });
});