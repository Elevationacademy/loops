const { ex } = require('../../ex-7')

const people = [
    { name: "Ashley", age: 23 },
    { name: "Donovan", age: 47 },
    { name: "Lucas", age: 18 }
]

let outputData = ''
storeLog = inputs => (outputData += inputs)
console['log'] = jest.fn(storeLog)

test("Should print '`name` is `age` years old`' for each pair in `people`", function () {
    outputData = ""
    ex(people)
    people.forEach(p => {
        expect(outputData.includes(`${p.name} is ${p.age} years old`))
            .toBe(true)
    })
})