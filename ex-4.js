// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise4() {
    //vv Create your variables here vv
    const nums = []
    //^^Create your variables here^^ 

    const ex = function (nums) {
        for (let i = 0; i < 100; i++) { nums.push(i + 1) }
        console.log(nums)
        //Write your logic here (between the curly braces of `ex`)
    }

    return { ex, nums }
}

//feel free to ignore this:
var x = Exercise4()
typeof module == 'undefined' ? x.ex(x.nums) : module.exports = x