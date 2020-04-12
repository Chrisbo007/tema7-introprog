const dropdownlist = document.getElementById("dropdownlist");

const example = document.getElementById("example");

dropdownlist.onchange = function (event) {
const value = event.target.value;
example.style.fontFamily = `${value}`;

}