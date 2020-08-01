let root = [
{
  id: '1',
  name: '广东省',
  children: [
  {
    id: '11',
    name: '深圳市',
    children: [
    {
      id: '111',
      name: '南山市'
    },
    {
      id: '112',
      name: '福田区'
    }]
  }]
}]
const value = '111'
const fn = (value) => {
  let result = []
  value = value * 1
  while (value >= 1) {
    result.push(value)
    value = Math.floor(value / 10)
  }
  result.sort()
  return result
}
console.log(fn(value)) // 输出 [1， 11， 112]