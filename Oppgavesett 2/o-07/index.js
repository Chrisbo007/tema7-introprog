const tekst = document.getElementById("tekst");
const size = document.getElementById("size");
const type = document.getElementById("type");
const color = document.getElementById("color");
const background = document.getElementById("background");

size.onchange = function (event) {
    const value = event.target.value;
    tekst.style.fontSize = `${value}px`
}

type.onchange = function (event) {
    const value = event.target.value;
    tekst.style.fontStyle = `${value}`
}
color.onchange = function (event) {
    const value = event.target.value;
    tekst.style.color = `${value}`
}
background.onchange = function (event) {
    const value = event.target.value;
    tekst.style.backgroundColor = `${value}`
}