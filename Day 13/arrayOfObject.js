const books = [
    { month: "January", title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari" },
    { month: "February", title: "The Night Circus", author: "Erin Morgenstern" },
    { month: "March", title: "Educated", author: "Tara Westover" },
    { month: "April", title: "1984", author: "George Orwell" },
    { month: "May", title: "To Kill a Mockingbird", author: "Harper Lee" },
    { month: "June", title: "Atomic Habits", author: "James Clear" },
    { month: "July", title: "Dune", author: "Frank Herbert" },
    { month: "August", title: "The Alchemist", author: "Paulo Coelho" },
    { month: "September", title: "The Lean Startup", author: "Eric Ries" },
    { month: "October", title: "Frankenstein", author: "Mary Shelley" },
    { month: "November", title: "The Pragmatic Programmer", author: "Andrew Hunt and David Thomas" },
    { month: "December", title: "Becoming", author: "Michelle Obama" }
];

for (var book of books){
    console.log(book['title'])
}