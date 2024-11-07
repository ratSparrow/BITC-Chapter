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

for (item in obj1) {
    console.log(item)
  }