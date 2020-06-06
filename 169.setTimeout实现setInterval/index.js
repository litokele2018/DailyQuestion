(() => {
  const list = new Set()

  function mySetInterval(fn, duration) {
    const ref = {}

    const exec = () => {
      return setTimeout(() => {
        fn.call(null)
        const timer = exec()
        ref.current = timer
      }, duration)
    }

    ref.current = exec()
    list.add(ref)
    return ref
  }

  function myClearInterval(ref) {
    clearTimeout(ref.current)
    list.delete(ref)
  }

  window.mySetInterval = mySetInterval
  window.myClearInterval = myClearInterval
})()