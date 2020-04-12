const inp1 = document.getElementById("inp1");
const btn = document.getElementById("btn");
const bank = document.getElementById("bank");
const btn2 = document.getElementById("btn2");

let amount = 0;
let balance = 500; 
checkbank();

inp1.oninput = function(event) {
    amount = parseInt(event.target.value);
    
}

btn.onclick = function(event) {
    checkbank();
}

btn2.onclick = function(event) {
    insertbank();
}

function checkbank() {
    if (amount <= balance) {
        balance = balance - amount 
        bank.innerText = `Du har nå kroner ${balance} på konto`

    } else {
        bank.innerText = "Du har ikke nok penger på konto"
        bank.style.backgroundColor="red"
    }
}

function insertbank() {
    balance = balance + amount
    bank.innerText = `Du har nå kroner ${balance} på konto`
    bank.style.backgroundColor="lightgreen"
}