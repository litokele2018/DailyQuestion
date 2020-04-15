function isChinese(str) {
  const re = /^[\u4e00-\u9fa5]+$/;
  return re.test(str);
}
let str = '大数据利率'
console.log(isChinese(str)) // true

/*
按照中文字符对应编写正则

字符集	字数	Unicode 编码
基本汉字	20902字	4E00-9FA5
基本汉字补充	38字	9FA6-9FCB
扩展A	6582字	3400-4DB5
扩展B	42711字	20000-2A6D6
扩展C	4149字	2A700-2B734
扩展D	222字	2B740-2B81D
康熙部首	214字	2F00-2FD5
部首扩展	115字	2E80-2EF3
兼容汉字	477字	F900-FAD9
兼容扩展	542字	2F800-2FA1D
PUA(GBK)部件	81字	E815-E86F
部件扩展	452字	E400-E5E8
PUA增补	207字	E600-E6CF
汉字笔画	36字	31C0-31E3
汉字结构	12字	2FF0-2FFB
汉语注音	22字	3105-3120
注音扩展	22字	31A0-31BA
〇	1字	3007

*/

