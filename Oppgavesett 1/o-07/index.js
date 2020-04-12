const bilde = prompt("URL til bilde");
const tittel = prompt("Hva er tittelen?")
const bredde = prompt("Hvor bredt skal bildet være?")


document.write(`
    <img 
        src="${bilde}"
        title="${tittel}"
        style="width: ${bredde}px;"
    >
`);

