const forrett= prompt("Hva ønsker du til forrett?");
const hovedrett=prompt("Hva ønsker du til hovedrett?");
const dessert=prompt("Hva ønsker du til dessert?");
document.write(`
    <ul>
        <li>${forrett}</li>
        <li>${hovedrett}</li>
        <li>${dessert}</li>
    </ul>
`);