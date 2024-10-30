const studentsOf3rdSemester = [
    {
        id: 1,
        name: "Parvej",
        age: 12,
        department: "CSE",
        enrolled: true,
        cgpa: undefined,
        course: ["AI", "OOP", "DBMS", "OS", "C"],
        married:false,
        address: {
            house: 7,
            block: "D",
            road: 2,
            room: 502
        },
    },
    {
        id: 2,
        name: "Anik",
        age: 13,
        department: "EEE",
        enrolled: false,
        cgpa: undefined,
        course: ["AI", "OOP", "DBMS", "OS", "C"],
        address: {
            house: 7,
            block: "E",
            road: 2,
            room: 501
        },
    },
    {
        id: 3,
        name: "Polash",
        age: 11,
        department: "Civil",
        enrolled: true,
        cgpa: undefined,
        course: ["AI", "OOP", "DBMS", "OS", "C"],
        address: {
            house: 7,
            block: "E",
            road: 2,
            room: 501
        },
    },
]


for(var i =0; i<studentsOf3rdSemester.length; i++){
    console.log(studentsOf3rdSemester[i].married)
}
