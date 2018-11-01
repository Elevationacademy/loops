// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise6() {
    const names = ["Ashley", "Donovan", "Lucas"]
    const ages = [23, 47, 18]
    const people = []

    const ex = function (names, ages) {
        for (let i in names) {
            people.push({ name: names[i], age: ages[i] })
        }
        //Write your logic here (between the curly braces of `ex`)
    }

    return { ex, names, ages, people }
}

//feel free to ignore this:
var x = Exercise6
typeof module == 'undefined' ? x().ex(x.names, x.ages) : module.exports = x