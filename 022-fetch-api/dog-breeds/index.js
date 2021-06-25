const select = document.querySelector('#breeds');
const imgContainer = document.querySelector('.img-container');

const defineSelect = (data) => {
    const nameArr = Object.keys(data.message);
    console.log(nameArr);

    nameArr.forEach(el => {
        const option = document.createElement('option');
        option.setAttribute('value', el);
        option.textContent = el[0].toUpperCase() + el.slice(1);

        select.append(option);
    });
};

const getBreedNames = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => defineSelect(data));
};


const renderImages = (data) => {
    imgContainer.innerHTML = '';
    data.message.slice(0, 30).forEach(el => {
        const img = document.createElement('img');
        img.src = el;
        imgContainer.style.display = 'flex';
        imgContainer.append(img);
    });
};

const getBreedData = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(data => renderImages(data))
        .catch(reject => console.log(reject));
};


// Event listeners
window.addEventListener('load', getBreedNames);

select.addEventListener('change', () => {
    if (select.value) {
        getBreedData(select.value);
    }
});
