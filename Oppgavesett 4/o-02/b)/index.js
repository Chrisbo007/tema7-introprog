

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
}

visVenner();
