const Exercise6 = require('../../ex-6')
const { isObjectAndNotArray } = require('./utils')

const theNames = ["Ashley", "Donovan", "Lucas"]
const theAges = [23, 47, 18]

test("Should populate `people` array with `{name:..., age:...}` objects", function () {
    const { ex, people } = Exercise6()
    
    ex(theNames, theAges)

    for (let p of people) {
        isObjectAndNotArray(p)
        expect(p).toHaveProperty('name')
        expect(p).toHaveProperty('age')
    }
})

test("Should populate people using `names` and `ages` arrays", function () {
    const { ex, people } = Exercise6()    

    expect(people.length).toBe(0)
    ex(theNames, theAges)

    for (let i in people) {
        let p = people[i]
        expect(p.name).toBe(theNames[i])
        expect(p.age).toBe(theAges[i])
    }
})