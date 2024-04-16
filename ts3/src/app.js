"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlResult = document.getElementById("result");
const salis = document.getElementById("salis");
const suzinoti = document.getElementById("suzinoti");
console.log("Pasileido");
suzinoti.onclick = () => {
    fetch(`http://universities.hipolabs.com/search?country=${salis.value}`)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        let str = "";
        data.forEach((u) => {
            str += `<a href='http://${u.domains[0]}'> ${u.name} </a>   <br>`;
        });
        htmlResult.innerHTML = str;
    });
};
