// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise8() {
    let indexToRemove

    const posts = [
        { id: 1, text: "Love this product" },
        { id: 2, text: "This is the worst. DON'T BUY!" },
        { id: 3, text: "So glad I found this. Bought four already!" }
    ]

    const ex = function (posts, indexToRemove) {
        //Write your logic here (between the curly braces of `ex`)
    }

    return { ex, posts, indexToRemove }
}

//feel free to ignore this:
var x = Exercise8
typeof module == 'undefined' ? x().ex(x().posts, x().indexToRemove) : module.exports = x