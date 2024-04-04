class Trupmena {
    #sveikojiDalis = 0;
    #skaitiklis = 0;
    #daliklis = 0;

    set skaitiklis(skaitiklis) {
        this.#skaitiklis = skaitiklis;
        this.#prastinti();
    }

    get skaitiklis() {
        return this.#skaitiklis;
    }

    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.#sveikojiDalis = sveikojiDalis;
        this.#skaitiklis = skaitiklis;
        this.#daliklis = daliklis;
        this.#prastinti();
    }

    #prastinti() {
        for (let i = this.#daliklis; i > 0; i--) {
            if (this.#daliklis % i === 0 && this.#skaitiklis % i === 0) {
                this.#daliklis = this.#daliklis / i;
                this.#skaitiklis = this.#skaitiklis / i;

            }
        }
    }

    toString() {
        return `${this.#sveikojiDalis === 0 ? '' : this.#sveikojiDalis} ${this.skaitiklis} / ${this.#daliklis}`;
    }

    static help() {
        console.log("Ši klasė skirta darbui su f-jomis");
    }

}



Trupmena.help();
/*
const tmp=new Trupmena(0,0,0);
tmp.help();
*/
/*

const x=new Trupmena(1,6,8);
x.skaitiklis=2;
//x.#skaitiklis=2;


console.log(x.toString())
console.log(x.skaitiklis);


*/