const firkant = document.getElementById("firkant");

const inpX = document.getElementById("inpX");
const inpY = document.getElementById("inpY");

inpX.onchange = function (event) {
    const value = event.target.value;
    console.log(value);
    firkant.style.left = `${value}px`
}
inpY.onchange = function (event) {
    const value = event.target.value;
    console.log(value);
    firkant.style.top = `${value}px`
}


const width = document.getElementById("width");
const height = document.getElementById("height");

width.onchange = function (event) {
    const value = event.target.value;
    console.log(value);
    firkant.style.width = `${value}px`
}
height.onchange = function (event) {
    const value = event.target.value;
    console.log(value);
    firkant.style.height = `${value}px`
}


const borderRadius = document.getElementById("border-radius");


borderRadius.onchange = function (event) {
    const value = event.target.value;
    console.log(value);
    firkant.style.borderRadius = `${value}px`
}


