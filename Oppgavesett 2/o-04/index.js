const div1 = document.getElementById("div-element");

const xpos = document.getElementById("xpos");
const ypos = document.getElementById("ypos");

xpos.onchange = function(event) {
    const value = event.target.value;
    console.log(value)
    div1.style.left = `${value}px`
}
ypos.onchange = function(event) {
    const value = event.target.value;
    console.log(value)
    div1.style.top = `${value}px`
}