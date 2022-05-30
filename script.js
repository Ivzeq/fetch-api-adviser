const img = document.querySelector('img');
const refreshButton = document.querySelector('#refresh');
const searchInput =document.querySelector('#search-text');

refreshButton.addEventListener('click', ()=>{
    let searchValue = searchInput.value;

    fetch('https://api.giphy.com/v1/gifs/translate?api_key=RaoHLsfdCAf77MQz7cmw4TTu9tFImubp&s=' + searchValue, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function (response){
            console.log(response)
            img.src = response.data.images.original.url;
    });
})

fetch('https://api.giphy.com/v1/gifs/translate?api_key=RaoHLsfdCAf77MQz7cmw4TTu9tFImubp&s=Welcometext', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function (response){
        console.log(response)
        img.src = response.data.images.original.url;
    });

