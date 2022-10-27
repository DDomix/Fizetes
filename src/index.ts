let teljesnev=/[a-z A-Z]{1,}/;
let orszag=/[a-z A-Z]{1,}/;
let varos=/[a-z A-Z]{1,}/;
let utca=/[a-z A-Z 0-9]{1,}/;
let iranyitoszam=/[A-Z 0-9]/;
let bankkartya=/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
let ellenorzokod=/[0-9]{3,3}/;
let kartyanev=/[a-z A-Z]/;


document.getElementById("gomb")!.addEventListener("click",()=>{
    let abankkartya=(document.getElementById("kartyaszam") as HTMLInputElement).value;
    console.log(bankkartya.test(abankkartya));
    if(bankkartya.test(abankkartya)==false){
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("kartyaszam");
            if(cucc){
                cucc.style.borderColor="RED";
            }
            ize.style.color="RED";
            ize.textContent = "Nem jól töltötte ki";
        }
    }
    else{
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("teljesnev");
            if(cucc){
                cucc.style.borderColor="BLACK";
            }
            ize.style.color="RED";
            ize.textContent = null;
        }
    }
    
    
    let nev=(document.getElementById("teljesnev") as HTMLInputElement).value;
    console.log(teljesnev.test(nev));
    if(teljesnev.test(nev)==false){
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("teljesnev");
            if(cucc){
                cucc.style.borderColor="RED";
            }
            ize.style.color="RED";
            ize.textContent = "Nem jól töltötte ki";
        }
    }
    else{
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("teljesnev");
            if(cucc){
                cucc.style.borderColor="BLACK";
            }
            ize.style.color="RED";
            ize.textContent = null;
        }
    }

    let country=(document.getElementById("orszag") as HTMLInputElement).value;
    console.log(orszag.test(country));
    if(orszag.test(country)==false){
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("orszag");
            if(cucc){
                cucc.style.borderColor="RED";
            }
            ize.style.color="RED";
            ize.textContent = "Nem jól töltötte ki";
        }
    }
    else{
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("orszag");
            if(cucc){
                cucc.style.borderColor="BLACK";
            }
            ize.style.color="RED";
            ize.textContent = null;
        }
    }

    let city=(document.getElementById("varos") as HTMLInputElement).value;
    console.log(varos.test(city));
    if(varos.test(city)==false){
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("varos");
            if(cucc){
                cucc.style.borderColor="RED";
            }
            ize.style.color="RED";
            ize.textContent = "Nem jól töltötte ki";
        }
    }
    else{
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("varos");
            if(cucc){
                cucc.style.borderColor="BLACK";
            }
            ize.style.color="RED";
            ize.textContent = null;
        }
    }

    let street=(document.getElementById("utca") as HTMLInputElement).value;
    console.log(utca.test(street));
    if(utca.test(street)==false){
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("utca");
            if(cucc){
                cucc.style.borderColor="RED";
            }
            ize.style.color="RED";
            ize.textContent = "Nem jól töltötte ki";
        }
    }
    else{
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("utca");
            if(cucc){
                cucc.style.borderColor="BLACK";
            }
            ize.style.color="RED";
            ize.textContent = null;
        }
    
    }
    let irsz=(document.getElementById("iranyitoszam") as HTMLInputElement).value;
    console.log(iranyitoszam.test(irsz));
    if(iranyitoszam.test(irsz)==false){
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("iranyitoszam");
            if(cucc){
                cucc.style.borderColor="RED";
            }
            ize.style.color="RED";
            ize.textContent = "Nem jól töltötte ki";
        }
    }
    else{
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("iranyitoszam");
            if(cucc){
                cucc.style.borderColor="BLACK";
            }
            ize.style.color="RED";
            ize.textContent = null;
        }
    }
    let code=(document.getElementById("ellenorzokod") as HTMLInputElement).value;
    console.log(ellenorzokod.test(code));
    if(ellenorzokod.test(code)==false){
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("ellenorzokod");
            if(cucc){
                cucc.style.borderColor="RED";
            }
            ize.style.color="RED";
            ize.textContent = "Nem jól töltötte ki";
        }
    }
    else{
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("ellenorzokod");
            if(cucc){
                cucc.style.borderColor="BLACK";
            }
            ize.style.color="RED";
            ize.textContent = null;
        }
    }

    let name=(document.getElementById("kartyanev") as HTMLInputElement).value;
    console.log(kartyanev.test(name));
    if(kartyanev.test(name)==false){
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("kartyanev");
            if(cucc){
                cucc.style.borderColor="RED";
            }
            ize.style.color="RED";
            ize.textContent = "Nem jól töltötte ki";
        }
    }
    else{
        let ize = document.getElementById("isvalid"); 
        if (ize){
            let cucc=document.getElementById("kartyanev");
            if(cucc){
                cucc.style.borderColor="BLACK";
            }
            ize.style.color="RED";
            ize.textContent = null;
        }
    }
    console.log(document.getElementById("isvalid"));
    if(document.getElementById("isvalid")?.innerText==""){
        window.alert("Sikeres fizetés");
        
    }
})
