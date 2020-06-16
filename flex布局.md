<<<<<<< HEAD
#### 主轴
#### 交叉轴

#### flex-container上的属性
> + flex-flow
> + flex-direction
> + flex-wrap
> + justify-content
> + align-items
> + align-content

**1. flex-direction**
> 决定主轴的方向
> + [[row]] 默认 => 从左到右
> + [[row-reverse]]
> + [[column]]
> + [[column-reverse]]

**2. justify-content**
> 决定了flex-items在主轴上如何排布
> + [[flex-start]] 主轴start处对齐
> + [[flex-end]] 主轴end处对齐
> + [[center]]
> + [[space-between]] items之间分配
> + [[space-evenly]] 平均分配空间
> + [[space-around]] 两边是中间的一半

**3. align-items**
> 决定了flex-items在交叉轴上的对齐方式
> + [[normal]] 默认，效果和stretch一样， 当items没设置高度时，会自动拉伸至交叉轴高度
> + [[stretch]]
> + [[flex-start]] 交叉轴start处对齐
> + [[flex-end]] 交叉轴end处对齐
> + [[center]] 交叉轴的中心对齐
> + [[baseline]] 基线对齐

**4. flex-wrap**
> + [[nowrap]] 不换行
> + [[wrap]] 换行
> + [[wrap-reverse]] 在交叉轴上翻转

**5. flex-flow**(缩写属性)
> flex-direction 和 flex-wrap的缩写

**6. align-content**
> 多行flex-items在交叉轴上如何排布(justift-content)
> + [[stretch]]
> + [[flex-start]]
> + [[flex-end]]
> + [[center]]
> + [[space-between]]
> + [[space-evenly]]
> + [[space-around]]

#### flex-items 上的属性
> + flex
> + flex-grow
> + flex-basis
> + flex-shrink
> + order
> + align-self

**1. order**
> 决定flex-items的排布顺序

**2. align-self**
> 修改自己的align-items对齐方式， 搞与众不同？ 会覆盖统一的align-items

**3. flex-grow**
> 剩余空间拿来 按比例分配
> 默认 0
> 大于1 会分完
> 小于1 不会分完

**4. flex-shrink**
> 默认 1 分配超出空间
> 其他同flex-grow

**5. flex-basis**
> 可以设置主轴上 item 的大小

**6. flex**(缩写属性)
> flex-grow, flex-shrink, flex-basis
> 如果不带单位 flex-grow， flex-shrink
> 带单位 flex-basis
=======
#### 主轴
#### 交叉轴

#### flex-container上的属性
> + flex-flow
> + flex-direction
> + flex-wrap
> + justify-content
> + align-items
> + align-content

**1. flex-direction**
> 决定主轴的方向
> + [[row]] 默认 => 从左到右
> + [[row-reverse]]
> + [[column]]
> + [[column-reverse]]

**2. justify-content**
> 决定了flex-items在主轴上如何排布
> + [[flex-start]] 主轴start处对齐
> + [[flex-end]] 主轴end处对齐
> + [[center]]
> + [[space-between]] items之间分配
> + [[space-evenly]] 平均分配空间
> + [[space-around]] 两边是中间的一半

**3. align-items**
> 决定了flex-items在交叉轴上的对齐方式
> + [[normal]] 默认，效果和stretch一样， 当items没设置高度时，会自动拉伸至交叉轴高度
> + [[stretch]]
> + [[flex-start]] 交叉轴start处对齐
> + [[flex-end]] 交叉轴end处对齐
> + [[center]] 交叉轴的中心对齐
> + [[baseline]] 基线对齐

**4. flex-wrap**
> + [[nowrap]] 不换行
> + [[wrap]] 换行
> + [[wrap-reverse]] 在交叉轴上翻转

**5. flex-flow**(缩写属性)
> flex-direction 和 flex-wrap的缩写

**6. align-content**
> 多行flex-items在交叉轴上如何排布(justift-content)
> + [[stretch]]
> + [[flex-start]]
> + [[flex-end]]
> + [[center]]
> + [[space-between]]
> + [[space-evenly]]
> + [[space-around]]

#### flex-items 上的属性
> + flex
> + flex-grow
> + flex-basis
> + flex-shrink
> + order
> + align-self

**1. order**
> 决定flex-items的排布顺序

**2. align-self**
> 修改自己的align-items对齐方式， 搞与众不同？ 会覆盖统一的align-items

**3. flex-grow**
> 剩余空间拿来 按比例分配
> 默认 0
> 大于1 会分完
> 小于1 不会分完

**4. flex-shrink**
> 默认 1 分配超出空间
> 其他同flex-grow

**5. flex-basis**
> 可以设置主轴上 item 的大小

**6. flex**(缩写属性)
> flex-grow, flex-shrink, flex-basis
> 如果不带单位 flex-grow， flex-shrink
> 带单位 flex-basis
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
