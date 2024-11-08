const students = [
    {
        id:1,
        name:"A"
    },
    {
        id:2,
        name:"B"
    },
    {
        id:3,
        name:"C"
    },
    {
        id:4,
        name:"D"
    },
    {
        id:5,
        name:"E"
    },
    {
        id:6,
        name:"F"
    },

]

const uId = 4

const result = students.filter((student)=>student.id === uId)
console.log(result)