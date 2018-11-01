const { ex, nums } = require('../../ex-2')

test("`nums` should be an array of numbers", function () {
    expect(nums).toBeInstanceOf(Array)
    nums.forEach(n => expect(typeof n).toBe('number'))
})

let outputData = ''
storeLog = inputs => (outputData += inputs)
console['log'] = jest.fn(storeLog)

test("Should loop through `nums` and print out only the final sum", function () {
    outputData = ""
    let numbers = [1, 1, 1, 1, 1, 1, 1]
    ex(numbers)
    expect(parseInt(outputData)).toBe(numbers.reduce((s, n) => s + n))
})