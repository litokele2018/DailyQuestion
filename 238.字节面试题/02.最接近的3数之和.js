let nums = [-1, 2, 1, 4]
let target = 1

var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  // [-1, 1, 2, 4]
  let minVal = Infinity
  let minInterval = Infinity
  let len = nums.length
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1
    let right = len - 1
    while (left < right) {
      let v = nums[left] + nums[right] + nums[i]
      if (v === target) {
        return target
      } else if (v > target) {
        minInterval = Math.min(minInterval, v - target)
        if (minInterval === v - target) minVal = v
        right--
      } else {
        minInterval = Math.min(minInterval, target - v)
        if (minInterval === target - v) minVal = v
        left++
      }
    }
  }
  return minVal
}

threeSumClosest(nums, target)