"use strict";
let x;
x = 5;
let y = 5;
let z = 5;
let a;
a = 8;
console.log(x.toFixed(2));
let x1 = {
    x: 5,
    y: 3
};
console.log(x1.x);
let darb1 = {
    name: "Jonas",
    salary: 1200
};
let darb2 = {
    name: "Petras",
    salary: 1200
};
console.log(darb1.name);
darb1 = darb2;
let darb3 = {
    name: "Jonaitis",
    salary: 1500,
    getAtlyginimasIrankas() {
        return this.salary * 0.8;
    },
};
let darb4 = {
    name: "Petraitis",
    salary: 123,
    getAtlyginimasIrankas() {
        return this.salary * 0.3;
    },
};
// Klasė
class Darbuotojas3 {
    constructor(name, salary) {
        this.name = "";
        this.salary = 0;
        this.name = name;
        this.salary = salary;
    }
    getAtlyginimasIRankas() {
        return this.salary * 0.8;
    }
}
let darb5 = new Darbuotojas3("Antanaitis", 1200);
let darb6 = new Darbuotojas3("Andriukaitis", 6000);
/*
let darb5:Darbuotojas3={
    name:"Antanaitis",
    salary:1200
}

let darb6:Darbuotojas3={
    name:"Andriukaitis",
    salary:1600
}
*/
/*
Duomenų tipas:    type
Talpina:
 duomenis

Interfeisas:      interface
Talpina:
 duomenis
 metodus
 apriboti klases


Klasė:            class
Talpina:
 duomenis
 metodus
 Galime realizuoti metodus
 Turi konstruktorius
 Geterius / seterius
 ...

*/
// Funkcijose privalome nurodyti parametru tipus
let suma = (x, y) => {
    return x * y;
};
let p = suma(5, 8);
