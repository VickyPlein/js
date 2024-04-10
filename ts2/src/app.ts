const skaiciusXInp=<HTMLInputElement>document.getElementById("skaiciusx");
const skaiciusYInp=<HTMLInputElement>document.getElementById("skaiciusy");

const skaiciuotiBtn=document.getElementById("skaiciuoti")!;
const rezultatasDiv=document.getElementById("rezultatas")!;

/*
if (skaiciuotiBtn!=null){
    skaiciuotiBtn.onclick=()=>{
        
    }
}
*/

class Skaiciai{
  constructor (public x:number, public y:number){

  }

  public suma():number{
    return this.x+this.y;
  }
}

const skaiciaiMas:Skaiciai[]=[];

   
skaiciuotiBtn.onclick=()=>{
        const x=skaiciusXInp.valueAsNumber;
        const y=skaiciusYInp.valueAsNumber
        skaiciaiMas.push(new Skaiciai(x,y));

        rezultatasDiv.innerHTML='';
        skaiciaiMas.forEach((s)=>{
            const div=document.createElement('div');
            div.innerHTML=`${s.x} + ${s.y} = ${s.suma() }`;
            rezultatasDiv.appendChild(div);
        });

        
}