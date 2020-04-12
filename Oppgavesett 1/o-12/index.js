const fornavn = prompt("Hva er fornavnet ditt?");
const etternavn = prompt("Hva er etternavnet ditt?");
const stilling = prompt("Hva er stillingstittelen ditt?");
const bilde = prompt("Legg ved en URL med bilde av deg selv");

document.write (`
<p><strong>${fornavn} ${etternavn}</strong></p>
<p><strong>Stilling:</strong> ${stilling}</p>
<img
    src="${bilde}"
    style="width:500px";
>

`);