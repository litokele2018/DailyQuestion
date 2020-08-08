function myFetch({
  url,
  method,
  headers
}) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })
    xhr.open(method, url)
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject()
      }
    }
  })
}