const pris = prompt("Hva koster varen uten moms?")

document.write(`
<p> Pris uten moms: ${pris} </p>
<p> + moms: 25% </p>
<p> Pris med moms: ${pris*1.25}</p>


`);