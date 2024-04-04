class Preke {
    #kaina = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        //Pradiniu reiksmiu priskyrimas
        this.#kaina = kaina;
        this.pavadinimas = pavadinimas;
    }

    // Metodas (kitaip sakant f-ja kuri yra klasėje)
    isvesti() {
        return `Prekes pavadinimas: ${this.pavadinimas}, kaina: ${this.#kaina} EUR`;
    }

    //Gražiname kainą su PVM
    //Getter
    get kainaSuPVM() {
        return this.#kaina * 1.21;
    }

    //Setteris 
    set kaina(k) {
        if (k - this.#kaina < 10) {
            this.#kaina = k;
        }
    }

    get kaina() {
        return this.#kaina;
    }

}

const tv = new Preke(100, "Televizorius");
const pc = new Preke(600, "Kompiuteris");

// Isvedame televizoriu
console.log(tv.isvesti());
// Pakeiteme kaina, 
tv.kaina = 109;
console.log(tv.isvesti());
console.log(tv.kaina);

// Isvedame kompiuteri
console.log(pc.isvesti());

console.log(tv.kainaSuPVM);

let kainuSuma = tv.kainaSuPVM + pc.kainaSuPVM;
