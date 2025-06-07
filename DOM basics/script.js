// html structure

// window = global object (top node)
console.log(window) // same as directly typing "window" in the console

/*
document = document object
"document" is equivalent to "window.document"
*/
// console.log(document) // equivalent to console.log(window.document); log() may only show the document
console.dir(document) // dir() shows document properties & methods

// get element by using methods (current way)
console.dir(document.getElementById('main'))
console.log(document.querySelector('#main ul'))

// get element by using properties (old way)
console.dir(document.body)
console.log(document.body.innerHTML) // returns html only
console.log(document.body.innerText) // returns text only

// modify element html
// document.body.innerHTML = '<h1>No Links</h1>'
// const main = document.getElementById('main')
// main.innerHTML = '<h1>New Header</h1>'
const header = (document.querySelector('#main h1').innerText = 'Home')

// get all links
console.log(document.links) // returns HTMLCollection
console.log(document.links[1])
