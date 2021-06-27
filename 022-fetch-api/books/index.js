const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#query');
const searchBtn = document.querySelector('#search-btn');
const book = document.querySelector('.books-container');

const renderDate = (data) => {
    const title = document.createElement('h1');
    title.textContent = data.title;
    book.append(title);

};

const getData = (query) => {
    fetch(`http://openlibrary.org/search.json${query}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.docs[2]);
            renderDate(data.docs[2]);

        });
};

// getData(window.location.search);

window.addEventListener('load', () => {
    getData(window.location.search);
});

searchBtn.addEventListener('click', () => {
    const query = window.location.search;
    console.log(query);
});


