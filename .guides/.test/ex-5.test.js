const { ex, emails } = require('../../ex-5')

let outputData = ''
storeLog = inputs => (outputData += inputs)
console['log'] = jest.fn(storeLog)

const test_emails = [
    { name: "Jessie", message: "Congrats on the promotion!" },
    { name: "Valerie", message: "Good luck with the space mission" },
    { name: "Marcus", message: "You've been credited for your performance" }
]

ex(emails)

test("Should print the message of each object in `emails`", function () {
    test_emails.forEach(e => { expect(outputData.includes(e.message)).toBe(true) })
})

test("Should print 'Sent email to `name` for each object in `emails`", function () {
    test_emails.forEach(e => { expect(outputData.includes(`Sent email to ${e.name}`)).toBe(true) })
})

test("Should remove each object from `emails` after the console logs", function () {
    const spliceSpy = jest.spyOn(Array.prototype, "splice")
    expect(spliceSpy).toBeCalledTimes(emails.length)
    expect(emails.length).toBe(0)
})