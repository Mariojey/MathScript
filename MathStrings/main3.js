function countAnotherNumber() {
    let arrow = []
    for (let i = 1; i <= 5; i++) {
        let result = ((-1) ** (i + 1)) / (i * (i + 1))
        arrow.push(result)
    }

    return arrow;
}

console.log(countAnotherNumber());