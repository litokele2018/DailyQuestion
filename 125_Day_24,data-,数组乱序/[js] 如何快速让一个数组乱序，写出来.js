// [js] 如何快速让一个数组乱序，写出来
// Fisher–Yates shuffle 洗牌算法
Array.prototype.shuffle = function() {
  var input = this;
  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    // [array[i], array[j]] = [array[j], array[i]]
    var itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}
var tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tempArray.shuffle();
console.log(tempArray);
// method 2
console.log(tempArray.sort(() => Math.random() > 0.5 ? 1 : -1))



/* 使用array.sort()进行乱序存在一定问题，增大样本进行实验之后可以发现这种乱序方案并不是完全随机
（所有元素会大概率停留在自己的初始位置）（v8处理排序是小于10个是插入排序，大于10个是快排，
排序算法复杂度介于O(n)与O(n2)之间，也就是存在两个元素都没有比较的机会，因此不是完全随机），
这里可以使用Fisher–Yates shuffle（洗牌算法） */