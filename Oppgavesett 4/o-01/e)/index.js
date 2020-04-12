const listfilmer = document.getElementById("listfilmer");
const inpNyFilm = document.getElementById("inpnyfilm");
const add = document.getElementById ("add");

let filmer = [];

function visFilmene () {
    listfilmer.innerHTML = "";  
    for (const film of filmer) {
        listfilmer.innerHTML += `<li>${film}</li>`;
    }

    inpNyFilm.value ="";
    inpNyFilm.focus ();

}


function leggTilFilmer() {
    console.log(inpNyFilm.value);
    filmer = [...filmer, inpNyFilm.value];
    console.log(filmer)
    visFilmene();
}

add.onclick = leggTilFilmer;
