/* 
  给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
  你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]
*/
function sum(nums, target) {
  let map = new Map()

  for (let i in nums) {
    map.set(nums[i], i)
  }
  for (let i = 0, length = nums.length; i < length; i ++) {
    let s = target - nums[i]
    if (map.has(s) && map.get(s) !== i.toString()) {
      return [i, parseInt(map.get(s))].sort((a, b) => {return a - b})
    }
  }
  return false
}


console.log(sum([3,2,4], 6))