// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise2() {
    //vv Create your variables here vv
    const nums = [2, 1, 4]
    //^^Create your variables here^^ 

    const ex = function (nums) {
        let sum = 0
        for (let n of nums) { sum += n }
        console.log(sum)
        //Write your logic here (between the curly braces of `ex`)
    }

    return { ex, nums }
}

//feel free to ignore this:
var x = Exercise2()
typeof module == 'undefined' ? x.ex(x.nums) : module.exports = x