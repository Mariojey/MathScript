//Funkcja obliczająca kolejne wartości ciągu
function findNextChar(args) {
    for (let i = 6; i < 20; i++) {
        let result = (2 ** i);
        args.push(result)

    }
    return args;
}
//Funkcja wyświetlająca dziedzinę 
function findDifferentChar(array) {

    let resTab = []
    for (let i = 0; i < array.length; i++) {
        let result = array[i] * ((-1) ** i);
        resTab.push(result);
    }
    return resTab;
}

//Ciąg a(n)
const tab = [2, 4, 8, 16, 32]
console.log(`Ciąg a(n)`);
const tabAfterfindNextString = findNextChar(tab);
console.log(tabAfterfindNextString);
//Argumenty n
console.log(`findDifferentChar ${findDifferentChar(tabAfterfindNextString)}`);