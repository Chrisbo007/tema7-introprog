const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const password = document.getElementById("password");

let password2 = "";
let password1 = "";


inp1.oninput = function (event) {
    password1 = event.target.value;
    checkpasswords();
}

inp2.oninput = function (event) {
    password2 = event.target.value;
    checkpasswords();
}

function checkpasswords() {
    if (password1 === "" || password2 === "") {
        password.innerText = "Du må fylle inn begge passordene!"
    } 
    else if (password1 === password2) {
        password.innerText = "Passordene er like!"
    }
    else {
        password.innerText = "Fyll in to like passord!"
    }
}