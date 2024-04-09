let x:number;
x=5;

let y:number=5;

let z=5;


let a:number;

a=8;

console.log(x.toFixed(2));

// Sukuriame duomenų tipą
type Point = {
    x:number;
    y:number;
}

let x1:Point={
    x:5,
    y:3
};

console.log(x1.x);

type Darbuotojas = {
    name:string,
    salary:number;
}

let darb1:Darbuotojas={
    name:"Jonas",
    salary:1200
}

let darb2:Darbuotojas={
    name:"Petras",
    salary:1200
}

console.log(darb1.name);


darb1=darb2;
// Interfeiso sukūrimas
interface Darbuotojas2{
    name:string;
    salary:number;
    getAtlyginimasIrankas:()=>number
}

let darb3:Darbuotojas2={
    name:"Jonaitis",
    salary:1500,
    getAtlyginimasIrankas() {
        return this.salary*0.8;
    },
}

let darb4:Darbuotojas2={
    name:"Petraitis",
    salary:123,
    getAtlyginimasIrankas() {
        return this.salary*0.3;
    },
}

// Klasė

class Darbuotojas3{
    name="";
    salary=0;

    constructor (name:string, salary:number){
      this.name=name;
      this.salary=salary;
    }
    

    getAtlyginimasIRankas(){
        return this.salary*0.8;
    }

}
let darb5=new Darbuotojas3("Antanaitis", 1200);
let darb6=new Darbuotojas3("Andriukaitis", 6000);

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
let suma=(x:number, y:number)=>{
    return x*y;
}

let p:number=suma(5,8);