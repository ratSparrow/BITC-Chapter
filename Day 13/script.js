const value = 10
const string = "Hello World"
const array1 = ["Robin", "Selim", "Anik"]
const obj1 = {
    id: 1,
    name:"Robin",
    age:14,
    enrolled:true,
    courses:["CSE", "EEE", "IE", "IPE"],
    address:{
        house:1,
        road:3,
        block:"D",
        thana:"Barisal"
    }
}

// console.log(obj1.address)
for (item of array1) {
    console.log(item)
  }