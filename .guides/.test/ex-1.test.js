const { ex, names, ages } = require('../../ex-1')

test("`names` and `ages` should have the same length", function () {
    expect(names.length).toBe(ages.length)
})

test("`names` should be an array of strings and `ages` should be an array of numbers", function () {
    expect(names).toBeInstanceOf(Array)
    expect(ages).toBeInstanceOf(Array)

    for (let i in names) {
        expect(typeof names[i]).toBe('string')
        expect(typeof ages[i]).toBe('number')
    }
})

let outputData = ""
storeLog = inputs => (outputData += inputs)
console["log"] = jest.fn(storeLog)

test("Should print '`name` is `age` years old' for each pair of name and age", function () {
    outputData = ""
    const ns = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const as = [0, 1, 2, 3, 4, 5, 6, 7]
    const expectedResult = as.map(i => `${ns[i]} is ${i} years old`)

    ex(ns, as)
    expect(outputData).toBe(expectedResult.join(""))
})
