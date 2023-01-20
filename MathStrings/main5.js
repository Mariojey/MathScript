/*
Obliczanie konkretnego wyrazu ciągu dla ciągu 
[1,3,5,7,9,11,13..]
*/
function findElement(n) {
    if (n <= 0) {
        console.log("Nie ma takiego elementu");
    }
    let a = n + (n - 1)
    console.log(`Dla ${n} elementu ciąg wynosi ${a}`);


}
/*
for (let i = 1; i < 7; i++) {
    console.log(i + (i - 1))

}
*/
findElement(5)