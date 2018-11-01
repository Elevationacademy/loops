// - DO NOT modify/delete *any* starter code (you can remove the comments though)

function Exercise3() {
    const nums = [30, 16, -4]

    const ex = function (nums) {
        console.log(nums.reduce((s, n) => s + n) / nums.length)
    }

    return { ex, nums }
}

//feel free to ignore this:
var x = Exercise3()
typeof module == 'undefined' ? x.ex(x.nums) : module.exports = x