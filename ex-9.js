// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise9() {
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

    const ex = function (posts) {
        //Write your logic here (between the curly braces of `ex`)
    }

    return { ex, posts }
}

//feel free to ignore this:
var x = Exercise9()
typeof module == 'undefined' ? x.ex(x.posts) : module.exports = x