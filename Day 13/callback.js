function result(b, c, cb) {
    const a = b + c
    const d = c - b

    const e = cb(a, d)
    return e
}


const callback = result(10, 20, function mul(a, b) {
    return a * b
})
const callback1 = result(10, 20,
    function div(a, b) {
        return a / b
    })
const callback2 = result(10, 20, function sum(a, b) {
    return a + b
})
console.log(callback)


