// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise7() {
    const people = [
        { name: "Ashley", age: 23 },
        { name: "Donovan", age: 47 },
        { name: "Lucas", age: 18 }
    ]

    const ex = function (people) {
        //Write your logic here (between the curly braces of `ex`)
    }

    return { ex, people }
}

//feel free to ignore this:
var x = Exercise7()
typeof module == 'undefined' ? x.ex(x.people) : module.exports = x