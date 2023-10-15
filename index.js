const cardTemplate = function (name, flag) {
    return `<div class="card">
                <img id="flag-image" src="${flag}" alt="flag" />
                <h1 class="center">${name}</h1>
              </div>`;
};

const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json())
  .then(country => {
    country.map(el => {
      countriesNode.innerHTML += cardTemplate(el.name.common, el.flags.png);
    })
  });

document.getElementById('showAll').addEventListener('click', function() {
  fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json())
  .then(country => {
    countriesNode.innerHTML = '';
    country.map(el => {
      countriesNode.innerHTML += cardTemplate(el.name.common, el.flags.png);
    })
  });
})

document.getElementById('regionFilter').addEventListener('click', function(event) {
  let region = document.getElementById('regionSelect').value;

  fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(country => {
      let filtered = country.filter(filt => filt.region == region)
      countriesNode.innerHTML = '';
      return filtered.map(el => {
        countriesNode.innerHTML += cardTemplate(el.name.common, el.flags.png);
    })
  });
})
