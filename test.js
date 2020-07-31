// ajax
let xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:3000')
xhr.send()

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status == 200) {
      console.log(xhr.responseText)
    }
  }
}