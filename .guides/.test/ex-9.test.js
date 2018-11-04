const { ex } = require('../../ex-9')

const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [{ id: 1, text: "Idiot has no idea" }, { id: 2, text: "I agree!" }, { id: 3, text: "Fool!" }]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

test("Should find and remove the comment with an `id` of 2 from post with `id` of 2", function () {
    expect(posts[0].comments.length).toBe(0)
    expect(posts[1].comments.length).toBe(3)
    expect(posts[2].comments.length).toBe(0)

    ex(posts)

    expect(posts[1].comments.find(c => c.id == 1)).toBeTruthy()
    expect(posts[1].comments.find(c => c.id == 2)).toBeFalsy()
    expect(posts[1].comments.find(c => c.id == 3)).toBeTruthy()
})