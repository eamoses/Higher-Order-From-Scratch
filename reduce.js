const reduceMe = (arr) => {
    console.log(`array: ${arr}`)
    let sum = 0;
    console.log(`sum: ${sum}`)
    arr.forEach(i => {
        console.log(`i: ${i}`)
        sum += i
        console.log(`inside foreach: ${sum}`)
    })
    console.log(`result: ${sum}`)
    return sum
}

reduceMe(['hello', 'how', 'are', 'you']);