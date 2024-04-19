import { userInfo } from "./app.js";
import { loadData } from "./loadData.js";

function authExec(method:string){
    //Url prisijungimui/registracijai priklausomai nuo to koks atsiustas method kintamasis
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=AIzaSyBWngwkeEBRDUL2hMnf8EZoceeIDkptAIg`,{
        method:"POST",
        headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
        },
        
        //Abiem atvejais siunčiame el. paštą paimtą iš formos ir slaptažodį taip pat paimtą iš formos
        body: JSON.stringify({
            email:(<HTMLInputElement>document.getElementById("loginEmail")).value,
            password:(<HTMLInputElement>document.getElementById("loginPassword")).value,
            returnSecureToken:true,
        })
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
        //Patikriname ar gražintame atsakyme yra error (atributas)
        // Jei taip, tuomet nutraukia vykdymą ir išmetame klaidą kuri patenka į catch metodą (apačioje)
        if (typeof data.error !== "undefined"){
            if (data.error.message=="EMAIL_EXISTS"){
                throw new Error("Toks el. pašto adresas jau egzistuoja");
            }
            if (data.error.message=="WEAK_PASSWORD : Password should be at least 6 characters"){
                throw new Error("Per silpnas slaptažodis");
            }

            throw new Error("Vartotojo vardas arba slaptažodis neteisingas");
        }
        console.log(data);
        // Priskiriame vartotojo duomenis kitamajam userInfo
        userInfo.email=data.email;
        //Priskiriame ir token
        userInfo.idToken=data.idToken;
        userInfo.loggedin=true;
        //Paslėpiame logino sekciją ir parodome duomenų sekciją
        (<HTMLElement>document.getElementById("loginSection")).style.display="none";
        (<HTMLElement>document.getElementById("dataSection")).style.display="block";
        //Užkrauname duomenis
        loadData();
    })
    .catch((err:Error)=>{
       let errorDiv= (<HTMLElement>document.getElementById("loginError"));
       errorDiv.style.display="block";
       errorDiv.innerHTML=err.message;
    });
}


// Eksportuojame prisijungimo ir registracijos funkcijas, kurios abi iškviečia authExec f-ją su skirtingais metodais
export function loginExec(){
    authExec("signInWithPassword");
} 

export function registerExec(){
    authExec("signUp");
}



// idToken
// :eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkOWI0ZTY5ZTMyYjc2MTVkNGNkN2NhZmI4ZmM5YjNmODFhNDFhYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVnaXN0cmFjaWphLWZhMjAxIiwiYXVkIjoicmVnaXN0cmFjaWphLWZhMjAxIiwiYXV0aF90aW1lIjoxNzEzNTM0NTU1LCJ1c2VyX2lkIjoiQTZFZkRrRVJNWmhXOXZhY0ZTSWdMS1lCTVZRMiIsInN1YiI6IkE2RWZEa0VSTVpoVzl2YWNGU0lnTEtZQk1WUTIiLCJpYXQiOjE3MTM1MzQ1NTUsImV4cCI6MTcxMzUzODE1NSwiZW1haWwiOiJnLmdyaWNpdXNAaXR1b3N0YXMubHQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZy5ncmljaXVzQGl0dW9zdGFzLmx0Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Zu_mfhjhZvM0EwAZTqr6F731sNxWAVPMydg-IyrU4qPdt8mgszRYVhS8HgsrdhgFM7f5uk9a2DWYcEPNm3fLJsgiF9zZgJ3kTPRjy9EZLDiUXPSZ1x9cVMHvhipLIEAKm-2j0lJh9PL36Ntw4rU3tGO3HeRWKNOdw_t9E7JdzD2Pbdy4omYd-XwzVfOOo6m8WyQ8lWXq5f9n8Mbp58hge4grLt-LLSaSTdrxL0co4jvR5JUAfUnTsnUqeIJikKedToOpyXMjj6Kb_MLWHus4OOhqFixJuqu0ZDaRffTm20DCKkzHFm53Iyq5oVRpo4Ryak7vNG_TOhG_WLmiBHWpvw
