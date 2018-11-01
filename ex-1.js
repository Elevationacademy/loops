// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise1() {

    //vv Create your arrays here vv
    const names = ["rob"]
    const ages = [1]
    //^^Create your arrays here^^ 

    const ex = function (names, ages) {
        //Write your logic here (between the curly braces of `ex`)
        for (let i in names) {
            console.log(`${names[i]} is ${ages[i]} years old`)
        }
    }

    return { ex, names, ages }
}

//feel free to ignore this:
var x = Exercise1()
typeof module == 'undefined' ? x.ex(x.names, x.ages) : module.exports = x