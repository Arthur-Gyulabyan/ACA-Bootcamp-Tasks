const select = document.querySelector('.select');
const imgContainer = document.querySelector('.img-container');

const renderImages = (data) => {
    imgContainer.innerHTML = '';
    data.message.slice(0, 30).forEach(el => {
        const img = document.createElement('img');
        img.src = el;
        imgContainer.append(img);
    });
};

const getBreedData = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(data => renderImages(data))
        .catch(reject => console.log(reject));
};


select.addEventListener('change', () => {
    if (select.value) {
        getBreedData(select.value);
    }
});
