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
    let sort = country.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1)
    sort.map(el => countriesNode.innerHTML += cardTemplate(el.name.common, el.flags.png))
  });

document.getElementById('showAll').addEventListener('click', function() {
  fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json())
  .then(country => {
    countriesNode.innerHTML = '';
    let sort = country.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1)
    sort.map(el => countriesNode.innerHTML += cardTemplate(el.name.common, el.flags.png))
  });
})

document.getElementById('regionFilter').addEventListener('click', function(event) {
  let region = document.getElementById('regionSelect').value;

  fetch(`https://restcountries.com/v3.1/region/${region.toLowerCase()}`)
    .then(res=>res.json())
    .then(country => {
      countriesNode.innerHTML = '';
      let sort = country.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1)
      return sort.map(el => countriesNode.innerHTML += cardTemplate(el.name.common, el.flags.png))
  });
})
