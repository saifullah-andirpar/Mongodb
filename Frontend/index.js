const searchText = window.location.search 
const urlparam = new URLSearchParams (searchText)
const id = urlparam.get ('id')
const id2 = urlparam.get ('id2')
console.log (id)
console.log (id2)
console.log (`http://localhost:5003/details`)

fetch(`http://localhost:5003/details?id=${id}&id2=${id2}`)
.then(res=>res.json())
.then(res=>console.log (res))