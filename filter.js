const filterMe = (arr) => {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] % 2 != 0) {
        newArray.push(arr[i])
       }
    }
    console.log(`result: ${newArray}`)
    return newArray
}

filterMe([1,2,3,45,6,7,8,9,0])

const arr3 = [5, 6, 7, 8]
const extraNewArray = []
const isGreater = (arrayIndex) => {
  if (arrayIndex > 6) {
    return true
  } else {
    return false
  }
}
const filterFunction = (fn, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) == true) {
      extraNewArray.push(arr[i]);      
    }
  }
    console.log(extraNewArray)
}

filterFunction(isGreater, arr3)