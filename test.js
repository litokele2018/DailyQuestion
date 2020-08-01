var lengthOfLIS = function(nums) {
  let max = 1
  let len = nums.length
  if (!len) return 0
  for (let i = 0; i < len - 1; i++) {
    let pre = nums[i]
    let cur = 1
    for (let j = i + 1; j < len; j++) {
      debugger;
      if (nums[j] > pre) {
        cur++
        pre = nums[j]
        max = Math.max(max, cur)
      }
    }
  }
  return max
};

let arr = [10, 9, 2, 5, 3, 4]
lengthOfLIS(arr)
