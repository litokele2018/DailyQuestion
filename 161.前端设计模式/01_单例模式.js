/**
 * 单例模式 保证一个类只有一个实例 一般用于全局缓存， 比如全局的window， 惟一
 * 的登陆浮窗等， 采用闭包实现
 */
const single = (
  () => {
    let instance

    function getInstance() {
      if (!instance) return new Construct()
      return instance
    }

    function Construct() {}

    return {
      getInstance
    }
  }
)()