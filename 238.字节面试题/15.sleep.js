function sleep(duration) {
  return new Promise(resolve => {
    console.log(1)
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

sleep(1000).then(() => {console.log(2)})