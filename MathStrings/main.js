//Funkcja obliczająca kolejne wartości ciągu
function findNextChar(args) {
    for (let i = 6; i < 20; i++) {
        let result = (i ** 2);
        args.push(result)

    }
    return args;
}
//Funkcja wyświetlająca dziedzinę
function findSqrt(array) {
    const resTab = []
    for (let i = 0; i < array.length; i++) {
        let result = array[i] ** (1 / 2);
        resTab.push(result);

    }
    return resTab;
}

//Ciąg a(n)
const tab = [1, 4, 9, 16, 25]
console.log(`Ciąg a(n)`);
const tabAfterfindNextString = findNextChar(tab);
console.log(tabAfterfindNextString);
//Argumenty n
console.log(`Dziedzina`);
console.log(findSqrt(tabAfterfindNextString));