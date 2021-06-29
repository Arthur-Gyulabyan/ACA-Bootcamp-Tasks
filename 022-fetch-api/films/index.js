const container = document.querySelector('.info-container');

const renderFilms = (data) => {
    data.forEach(film => {
        const html = `
            <table>
              <tr>
                <td>Title</td>
                <td class="film-title">${film.title}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>${film.description}</td>
              </tr>
              <tr>
                <td>Director</td>
                <td>${film.director}</td>
              </tr>
              <tr>
                <td>Produces</td>
                <td>${film.producer}</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>${film.release_date}</td>
              </tr>
            </table>
        `;

        container.insertAdjacentHTML('beforeend', html);
    });
};

const getData = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderFilms(data);
        });
};

window.addEventListener('load', getData);
