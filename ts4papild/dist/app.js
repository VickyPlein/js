import { loginExec, registerExec } from "./auth.js";
import { fetchRegistrations } from "./fetchData.js";
import { loadData } from "./loadData.js";
const markInput = document.getElementById("mark");
const modelInput = document.getElementById("model");
const yearInput = document.getElementById("year");
const regNumberInput = document.getElementById("regNumber");
const phoneInput = document.getElementById("phone");
const addRegistrationButton = document.getElementById("addRegistration");
const loadDataButton = document.getElementById("loadData");
export const registrationData = [];
addRegistrationButton.onclick = () => {
    let lytis = document.querySelector('input[name="sex"]:checked');
    if (lytis != null) {
        console.log(lytis.value);
    }
    const reg = {
        mark: markInput.value,
        model: modelInput.value,
        year: yearInput.valueAsNumber,
        regNumber: regNumberInput.value,
        phone: phoneInput.value,
    };
    fetchRegistrations('registrations', 'POST', reg)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log("Įrašas pridėtas");
        console.log(data);
    });
};
export const userInfo = {
    email: "",
    idToken: "",
    loggedin: false,
};
// Paslėpiame duomenų sekciją ir įjungiame rodyti prisijungimo sekciją
document.getElementById("loginSection").style.display = "block";
document.getElementById("dataSection").style.display = "none";
document.getElementById("loginError").style.display = "none";
loadDataButton.onclick = loadData;
//Registracijos URL
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWngwkeEBRDUL2hMnf8EZoceeIDkptAIg
//Prisijungimui URL
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWngwkeEBRDUL2hMnf8EZoceeIDkptAIg
/*Registracijos išbandymas

(<HTMLButtonElement>document.getElementById("login")).onclick=()=>{
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWngwkeEBRDUL2hMnf8EZoceeIDkptAIg",{
             method:"POST",
        headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email:"g.gricius@ituostas.lt",
            password:"LabasRytas",
            returnSecureToken:true,
    
        })
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
     console.log(data);
      userInfo.email=data.email;
     userInfo.idToken=data.idToken;
     userInfo.loggedin=true;
    (<HTMLElement>document.getElementById("loginSection")).style.display="none";
    (<HTMLElement>document.getElementById("dataSection")).style.display="block";
    loadData();
    });
}
*/
// Mygtukam login ir register priskiriame f-jas iš auth.ts failo
document.getElementById("login").onclick = loginExec;
document.getElementById("register").onclick = registerExec;
