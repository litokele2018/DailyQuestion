 // Watcher
 function Watcher(vm, exp, cb) { // vm: 组件  exp: 监听的属性   cb: callback
   this.vm = vm
   this.cb = cb
   this.exp = exp
   this.value = this.get() // 初始化 添加进dep里
 }
 Watcher.prototype = {
   update() {
     this.run()
   },
   run() {
     let value = this.vm.data[this.exp] // vm 组件上有data属性
     let oldValue = this.value
     if (oldValue !== value) {
       this.value = value
       this.cb.call(this.vm, value, oldValue) //调用回调函数
     }
   },
   get() {
     Dep.target = this
     let value = this.vm.data[this.exp] // 调用属性 的get
     Dep.target = null
     return value
   }
 }

 // 组件
 function myVue(options) {
   this.vm = this;
   this.data = options.data;

   Object.keys(this.data).forEach((key) => {
     this.proxyKey(key);
   });

   observer(this.data);
   new Compile(options.el, this.vm);
   return this;
 }
 myVue.prototype.proxyKey = function (key) {
   // console.log(this)
   Object.defineProperty(this, key, {
     enumerable: false,
     configurable: true,
     get() {
       return this.data[key]
     },
     set(newVal) {
       this.data[key] = newVal
     }
   })
 }