let userNamePattern=/^[a-z]{3,}$/;
console.log(userNamePattern.test("bob"))
console.log(userNamePattern.test("!@1"))
console.log(userNamePattern.test("z"))


let emailSearchPattern=/[a-z.-_]+@[a-z.-_]+/g;
let szoveg="A petrik emailcime: petrik@petrik.hu"
let emailCimek=szoveg.matchAll(emailSearchPattern);
for(let email of emailCimek){
    console.log(email[0])
}