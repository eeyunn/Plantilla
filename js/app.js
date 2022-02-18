
document.addEventListener("DOMContentLoaded", init);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


async function init() {

    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();

        for (let i = 0; i <= 9; i++) {
            let aleatorio = getRandomInt(0, data.length);
            pintarCard(data[aleatorio]);
        }

    }
    catch (error) {
        console.log(error);
    }



}


function pintarCard(pais) {
    const flex = document.querySelector('.flex');
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();
    console.log(pais.translations.spa.common);



    clone.querySelector(".card-body-img").setAttribute("src", pais.flags.png);

    clone.querySelector(".card-body-title").innerHTML = pais.translations.spa.common;

    clone.querySelector(".card-body-text").textContent = "Continente: " + pais.continents;

    clone.querySelectorAll(".card-footer-social h3")[0].textContent=pais.capital;

    clone.querySelectorAll(".card-footer-social h3")[1].textContent=pais.timezones[0];

    clone.querySelectorAll(".card-footer-social h3")[2].textContent=pais.population;

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}





