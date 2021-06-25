const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#query');
const searchBtn = document.querySelector('#search-btn');


const getData = (query) => {
    fetch(`http://openlibrary.org/search.json${query}`)
        .then(response => response.json())
        .then(data => console.log(data));
};

getData(window.location.search);


