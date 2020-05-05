
标准盒模型：
width = contentWidth
实际宽度： contentWidth + 2 padding + 2 border + 2 margin
box-sizing: content-box

怪异盒模型：
width = contentWidth + 2 padding + 2 border
实际宽度： width + 2 margin
box-sizing: border-box

虽然标准模式可以算是标准，但实际使用过程中怪异模式反而更符合人的直觉（个人认为）,这样可以减少对 padding 和 border 的额外计算。

