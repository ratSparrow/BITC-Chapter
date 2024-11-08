const sum = (...arguments) => {
    let result = 0
    for (var argument of arguments){
        result =result + argument
    }
return result
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77, 78,90,45);
console.log(x)