fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => posts.map(post=>console.log(post.title)) )

// const obj1 = {
//     id:1,
//     name:"A"
// }

// const strigify = JSON.stringify(obj1)
// console.log("wrapping dtaa",strigify) //wrapping dtaa
// const unwrap = JSON.parse(strigify)
// console.log("unwrapping data" ,unwrap) // unwrapping data
