const headline = document.getElementById("headline");
const url = document.getElementById("url");
const button = document.getElementById("button"); 
const text = document.getElementById("text");
const nyhetssak = document.getElementById("nyhetssak")
const news = document.getElementById("news")


button.onclick = function() {
    console.log(headline.value);
    news.innerHTML += `
    <p>${headline.value}</p>
    <img src="${url.value}">
    `;
}
