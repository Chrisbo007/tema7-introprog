const inpNavn = document.querySelector("#inpNavn");
const inpAlder = document.querySelector("#inpAlder");
const btn = document.querySelector("#btn");

let venneliste = document.getElementById ("venneliste");

let venner = [
    { navn: "Thuy", alder: 29},
    { navn: "Hanna", alder: 28},
    { navn: "Johanna", alder: 28},
    { navn: "Morten", alder: 28},
];

function visVenner () {
    venneliste.innerHTML = "<div><strong>Navn</strong></div><div><strong>Alder</strong></div>";

    for (const venn of venner) {
        venneliste.innerHTML += `
          <div>${venn.navn}</div>  
          <div>${venn.alder} år</div>  
        `
    }

    inpNavn.value ="";
    inpNavn.focus ();
    inpAlder.value ="";
    inpAlder.focus ();
}

visVenner();




function leggTilVenn() {
    const nyVenn = { navn: inpNavn.value, alder: inpAlder.value }
    venner = [nyVenn, ...venner]
    
    visVenner();
}

btn.onclick = leggTilVenn;
