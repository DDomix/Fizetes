let teljesnev=/[a-z A-Z]{1,}/;
let orszag=/[a-z A-Z]{1,}/;
let varos=/[a-z A-Z]{1,}/;
let utca=/[a-z A-Z 0-9]{1,}/;
let iranyitoszam=/[A-Z 0-9]/;
let bankkartya=/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
let ellenorzokod=/[0-9]{3,3}/;
let kartyanev=/[a-z A-Z]/;


document.getElementById("gomb").addEventListener("click",()=>{
    let abankkartya=document.getElementById("kartyaszam").value;
    if(bankkartya.test(abankkartya)==false){
        document.getElementById("isvalid").textContent=="Nem jól töltötte ki";
    }
})