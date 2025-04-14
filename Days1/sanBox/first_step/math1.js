//addition 
function addNumber(a, b){
return a + b
}
const resultat1  = addNumber(5, 6);
console.log("le resultat de laddition est",resultat1);
//difference de la substration
function diffSubtra(a, b){
    return a - b
}
const resultat2  = diffSubtra(8, 6);
console.log("le resultat de laddition est",resultat2);
//multiplication
function multi(a, b){
    return a*b
}
// quotient de la division
const resultat3  = addNumber(8, 6);
console.log("le resultat de la multiplication es",resultat3);
function division(a, b) {
    if (b === 0) {
        return "Erreur : Division par zéro";
    }
    return a / b;
}
const quotient = division(20, 5);
console.log("Le quotient est : " + quotient); 