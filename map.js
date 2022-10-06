//.map() - function that takes an array of items 
//         and a function that returns an array 
//         with each item manipulated by that function.

// let modifiedArr = arr.map(function(element){ return element * 2;});
// console.log(arr)
// console.log(modifiedArr)
let arr = [3, 4, 5, 6]
let newArray = []
let doTheWork = (element) => {
    element = element * 2
    return element;
}
let loopOverTheArray = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        newArray.push(doTheWork(element))
    }
    console.log(newArray)
}
loopOverTheArray(arr)

// .reduce() - function that takes an array of amounts 
//             and returns the total amount.

let myObj  = [{
    'a': 1200,
    'b': 1400
}]
console.log(myObj[0].a)
