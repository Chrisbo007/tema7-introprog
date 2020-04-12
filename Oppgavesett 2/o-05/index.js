const matretter = document.querySelector("#matretter")

matretter.innerHTML += "<li>Fiskeboller</li>"

const addButton = document.getElementById("add")

const favoritter = document.getElementById("favoritter")

addButton.onclick = function (){
    matretter.innerHTML += `<li>${favoritter.value}</li>`
    favoritter.value = ""
}

