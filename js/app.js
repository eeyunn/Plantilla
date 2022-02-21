


async function init(continente) {
    try {

        const res = await fetch('https://restcountries.com/v3.1/region/' + continente);
        const data = await res.json();

        document.getElementById("botones").innerHTML="<h3>"+continente.toUpperCase()+"</h3>";
        for (let i = 0; i <= data.length; i++) {
            pintarCard(data[i]);
        }

    }
    catch (error) {
        console.log(error);
    }



}


function pintarCard(pais) {
    const flex = document.querySelector('#aqui');
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();
    console.log(pais.translations.spa.common);



    clone.querySelector(".img-fluid").setAttribute("src", pais.flags.svg);

    clone.querySelector(".card-body-title").innerHTML = pais.translations.spa.common;

    clone.querySelectorAll(".col-4 h4")[0].textContent = pais.capital;

    clone.querySelectorAll(".col-4 h4")[1].textContent = pais.timezones[0];

    clone.querySelectorAll(".col-4 h4")[2].textContent = pais.population;

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}


function limpiar() {
    console.log(target.firstChild);
}



