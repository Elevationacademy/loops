const { ex } = require('../../ex-3')

let outputData = ''
storeLog = inputs => (outputData += inputs)
console['log'] = jest.fn(storeLog)

test("Should console log only the average of `nums`", function () {
    outputData = ""
    const numbers = [2, 4, 6]
    ex(numbers)
    expect(parseInt(outputData)).toBe(numbers.reduce((s, n) => s + n) / numbers.length)
})