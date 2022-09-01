arrayOfMultiples(7, 5) 

function multiply(arr) {
    let output = [];
    for (let x of arr)
    output.push(x * arr.length);
    return output
}
console.log(multiply(7));
// arrayOfMultiples(12, 10)
// arrayOfMultiples(17, 6)