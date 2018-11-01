const Exercise8 = require('../../ex-8')

const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]

test("Should find the correct index and store it in `indexToRemove`", function () {
    let { indexToRemove } = Exercise8()
    expect(indexToRemove).toBeUndefined() //minimal check to make sure it's not hard-coded, can't think of a better way for now
})

test("Should remove the post with an id of 2 from the `posts` array", function () {
    let { ex } = Exercise8()
    let thePosts = [...posts]

    expect(thePosts.length).toBe(3)
    ex(thePosts)
    expect(thePosts.length).toBe(2)
    expect(thePosts.find(p => p.id === 2)).toBeFalsy()
    expect(thePosts.find(p => p.id === 1)).toBeTruthy()
    expect(thePosts.find(p => p.id === 3)).toBeTruthy()
})