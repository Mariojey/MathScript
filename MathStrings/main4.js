/*
    151/1/d
*/
function findNextChar(prev) {
    if (prev.length == 0) {
        for (let i = 0; i < 10; i++) {
            let result = ((-1) ** i) / i;
            prev.push(result.toFixed(3));
        }
    } else {
        for (let i = prev.length; i < prev.length + 10; i++) {
            let result = ((-1) ** i) / i;
            prev.push(result.toFixed(3));

        }
    }
    return prev;
}

let tab = []
console.log(findNextChar(tab));