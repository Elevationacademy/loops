const { ex, nums } = require('../../ex-4')

test("Should have an empty array called `nums`", function () {
    expect(nums).toBeInstanceOf(Array)
    expect(nums.length).toBe(0)
})

test("Should add the numbers 1 through 100 (only) to `nums`", function () {
    expect(nums.length).toBe(0)
    ex(nums)
    expect(nums.length).toBe(100)
    for (let i = 1; i <= 100; i++) { expect(nums[i - 1]).toBe(i) }
})