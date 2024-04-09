/*
Modifikatoriai: public, private, protected
class Studentas{
    // Public kintamieji ir metodai prienami visur
    public vardas="";
    // Protected kitamieji ir metodai prienami viduje klasės ir sub klasėse
    protected pavarde="";
    // Private kintamieji ir metodai prienami tik klasės viduje
    private amzius=0;

    public toString(){
        return this.vardas+" "+this.pavarde+" "+this.amzius;
    }
}

class Pirmakursis extends Studentas{
   public toString(){
    return this.vardas+" "+this.pavarde;
   }
}


let s=new Studentas();

console.log(s.vardas);
*/


/*

Įprastinis konstruktoriaus parašymo būdas
class Studentas{
    public vardas="";
    public pavarde="";
    public amzius=0;

    constructor (vardas:string, pavarde:string, amzius:number){
        this.vardas=vardas;
        this.pavarde=pavarde;
        this.amzius=amzius;

    }

    public toString(){
        return this.vardas+" "+this.pavarde+" "+this.amzius;
    }
}
*/
// Sutrumpintas konstruktoriaus parašymo būdas
class Studentas{
    constructor (   public vardas:string, 
                    public pavarde:string, 
                    private _amzius:number){
        
    }
    // Setteris
    set amzius(a:number){
        if (a>0 && a<150){
            this._amzius=a;
        }
    }

    //Geteris
    get amzius():number{
        return this._amzius;
    }

    public toString(){
        return this.vardas+" "+this.pavarde+" "+this._amzius;
    }

    public jaunesnis(s:Studentas):boolean{
        
        if (this.amzius<s.amzius){
            return true;
        }else{
            return false;
        }
    }
}

//let s=new Studentas("Jonas", "Jonaitis",20);
//console.log(s.toString());

//console.log(s.amzius);

let grupe:Studentas[]  =[];

grupe.push(new Studentas("Jonas", "Jonaitis",35) );
grupe.push(new Studentas("Petras", "Petraitis",30) );
grupe.push(new Studentas("Antanas", "Antanaitis",25) );

let amziuSuma=0;
grupe.forEach((s)=>{
    console.log(s.toString());
    amziuSuma+=s.amzius;
})

console.log(`Amžių suma: ${amziuSuma}`);

console.log(`Studentas 0 yra jaunesnis uz studenta 1: ${grupe[0].jaunesnis(grupe[1])} `)